import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../auth/entities/user.entity';
import { Repository } from 'typeorm';
import { BrcyptHelper } from '../helpers/bcrypt.helper';
import { CreateUserDTO, LoginUserDTO } from './dto';
import { JwtPayload } from './interface/jwt-payload.interface';
import { AucoApsusuarios } from './entities/apsxUser.entity';
import { AugeMenu } from './entities/menu-user.entity';
import { Aps } from 'src/aps/entities/aps.entity';
import { AugeDeadtoken } from './entities/deadToken.entity';
import { UpdateUserDTO } from './dto/update-user.dto';
import { ChangePassUserDTO } from './dto/change-pass-user.dto';
import { RandomPassUserDTO } from './dto/random-pass-user-dto';
import { response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(AucoApsusuarios)
    private readonly apsUserRepository: Repository<AucoApsusuarios>,
    @InjectRepository(AucoApsusuarios)
    private readonly menuUserRepository: Repository<AugeMenu>,
    @InjectRepository(Aps)
    private readonly apsRepository: Repository<Aps>,
    @InjectRepository(AugeDeadtoken)
    private readonly deadTokenRepository: Repository<AugeDeadtoken>,
    private readonly brcyptHelper: BrcyptHelper,
    private readonly jwtSercice: JwtService,
  ) {}

  async create(createUserDTO: CreateUserDTO) {
    try {
      const {
        sisuPass,
        sisuApellidos,
        sisuCorreo,
        sisuNombres,
        sisuEstado = 1,
      } = createUserDTO;

      const hasedPassword = await this.brcyptHelper.hashPassword(sisuPass);
      const querySequence = `SELECT SAUGE_SISUSUARIO.NEXTVAL FROM DUAL`;
      const nextVal = await this.userRepository.query(querySequence);
      const nextId = nextVal[0].NEXTVAL;
      const queryInsert = `INSERT INTO AUGE_SISUSUARIO VALUES (${nextId}, '${sisuNombres}', '${sisuApellidos}', '${sisuCorreo}', '${hasedPassword}', ${sisuEstado})`;
      await this.userRepository.query(queryInsert);

      return { message: 'Usuario creado exitosamente', status: 201 };
    } catch (error) {
      throw new BadRequestException('Error al crear el usuario');
    }
  }

  async updateUser(updateUserDTO: UpdateUserDTO) {
    console.log(updateUserDTO)
    const {
      sisuId,
      sisuNombres,
      sisuApellidos,
      sisuCorreo,
      sisuEstado
    } = updateUserDTO;

    const query = `
    UPDATE AUGE_SISUSUARIO
    SET SISU_NOMBRES = '${sisuNombres}', SISU_APELLIDOS = '${sisuApellidos}', SISU_CORREO = '${sisuCorreo}', SISU_ESTADO = ${sisuEstado}`
    // const hashPass = await this.brcyptHelper.hashPassword(sisuPass);
    await this.userRepository.query(query + ` WHERE SISU_ID = ${sisuId}`)
    return { message: 'Usuario actualizado exitosamente' };
  }

  async login(LoginUserDTO: LoginUserDTO) {
    try {
      const { sisuCorreo, sisuPass, idSistema } = LoginUserDTO;
      const user = await this.userRepository
        .createQueryBuilder('User')
        .select(['User.sisuCorreo', 'User.sisuPass', 'User.sisuId'])
        .where('User.sisuCorreo = :sisuCorreo', { sisuCorreo })
        .andWhere('ROWNUM <= 1')
        .getOne();

      if (!user) throw new UnauthorizedException('Invalid credentials');

      const passCorrect = await this.brcyptHelper.comparePasswords(
        sisuPass,
        user.sisuPass,
      );

      if (!passCorrect) throw new UnauthorizedException('Invalid credentials');

      const { sisuPass: _, ...userWithoutPassword } = user;
      return {
        ...userWithoutPassword,
        token: this.getJwtToken({
          sisuId: user.sisuId,
          sisuCorreo: sisuCorreo,
          idSistema: idSistema,
        }),
      };
    } catch (error) {
      console.log(error);
    }
  }

  async randomPassword(randomPassUserDTO: RandomPassUserDTO) {
    try {
      const user = await this.getUser(randomPassUserDTO.sisuId);

      if (!user) throw new BadRequestException('Usuario no encontrado');

      const newPass = await this.brcyptHelper.generateRandomPassword();

      await this.userRepository
        .createQueryBuilder()
        .update('AUGE_SISUSUARIO')
        .set({
          sisuPass: await this.brcyptHelper.hashPassword(newPass),
        })
        .where('SISU_ID = :id', { id: randomPassUserDTO.sisuId })
        .execute();
      return { message: 'Contraseña generada exitosamente', newPass };
    } catch (error) {
      console.log('error random password', error);
    }
  }

  async changePassword(changePassUserDTO: ChangePassUserDTO, sisuId) {
    try {
      const { sisuPass, newPass, confirmPass } = changePassUserDTO;
      const user = await this.getUser(sisuId);

      const passCorrect = await this.brcyptHelper.comparePasswords(
        sisuPass,
        user.SISU_PASS,
      );
      if (!passCorrect)
        throw new UnauthorizedException('Invalid Actual Password');

      if (newPass !== confirmPass)
        throw new BadRequestException('Passwords do not match');

      const hashPass = await this.brcyptHelper.hashPassword(newPass);

      await this.userRepository
        .createQueryBuilder()
        .update('AUGE_SISUSUARIO')
        .set({
          sisuPass: hashPass,
        })
        .where('SISU_ID = :id', { id: sisuId })
        .execute();

      return { message: 'Contraseña cambiada exitosamente' };
    } catch (error) {
      throw new BadRequestException('Error al cambiar la contraseña');
    }
  }

  async logout(token: string, sisuId: number) {
    await this.deadTokenRepository.query(`
    INSERT INTO AUGE_DEADTOKEN VALUES (SAUGE_DEADTOKEN.NEXTVAL, '${token}', ${sisuId}, sysdate)
    `);
  }

  private getJwtToken(payload: JwtPayload) {
    const token = this.jwtSercice.sign(payload);
    return token;
  }

  async getUsers(): Promise<User[]> {
    return await this.userRepository.find({
      order: {
        sisuId: 'ASC',
      },
    });
  }

  async getUser(id: number) {
    const user = await this.userRepository.query(
      `SELECT * FROM AUGE_SISUSUARIO WHERE SISU_ID = ${id}`,
    );

    return user[0];
  }

  async getMenuUser(sisuId: number, idSistema: number) {
    try {
      return await this.menuUserRepository.query(`
        SELECT a.MENU_ID
        FROM AUGE_USUAMENU a
        INNER JOIN AUGE_MENU b ON (a.MENU_ID = b.MENU_ID AND b.MENU_SISTEMA = :1)
        WHERE a.SISU_ID = :2
        AND a.USME_ESTADO = 1
        AND b.MENU_ESTADO = 1
        ORDER BY b.MENU_ID ASC
     `, [idSistema, sisuId]);
      
    } catch (error) {
      return {message: 'Error al obtener el menu', error};
    }
  }

  async getSistemasUser(data) {

    try {
      const sisuId = data.sisuId;

      const asignados = await this.userRepository.query(`
      SELECT AS2.SIST_ID, AS2.SIST_NOMBRE 
      FROM AUGE_SISTEMA as2
      JOIN AUGE_USUASISTEMA b ON (AS2.SIST_ID = B.SIST_ID AND  B.USSI_ESTADO = 1)
      WHERE B.USUA_ID = :1
      `, [sisuId]);

      const noAsignados = await this.userRepository.query(`
      SELECT AS2.SIST_ID, AS2.SIST_NOMBRE 
      FROM AUGE_SISTEMA as2
      JOIN AUGE_USUASISTEMA b ON (AS2.SIST_ID = B.SIST_ID AND  B.USSI_ESTADO = 0)
      WHERE B.USUA_ID = :1
      `, [sisuId]);

      return {
        asignados,
        noAsignados,
      };

      
    } catch (error) {
      return {message: 'Error al obtener los sistemas', error};
    }

  }

  async getApsAsignados(sisuId: number) {
    const apsAsignadas = await this.apsUserRepository.query(`
    SELECT aa.* FROM AUCO_APSASEO aa JOIN AUCO_APSUSUARIOS aa2 ON (aa.APSA_ID = aa2.APSA_ID AND aa2.APSI_ESTADO = 1) WHERE aa2.SISU_ID = ${sisuId} AND aa.APSA_ESTADO = 1 ORDER BY aa.APSA_NOMAPS asc
    `);

    const apsSinAsignar = await this.apsRepository.query(`
    SELECT * FROM AUCO_APSASEO aa WHERE APSA_ID NOT IN (SELECT aa2.APSA_ID FROM AUCO_APSUSUARIOS aa2 WHERE SISU_ID = ${sisuId} AND APSI_ESTADO = 1) AND APSA_ESTADO = 1 ORDER BY aa.APSA_NOMAPS ASC
    `);

    return {
      apsAsignadas,
      apsSinAsignar,
    };
  }

  async getMenuUserOptions(sisuId: number) {
    const menuUser = await this.menuUserRepository
      .query(`SELECT MENU_ID FROM AUGE_USUAMENU au WHERE USME_ESTADO = 1 AND SISU_ID = '${sisuId}' ORDER BY 1
    `);

    return menuUser.map((menu) => menu.MENU_ID);
  }

  async getMenuByUser(sisuId: number, idSistema: number) {
    try {
      const menuUser = await this.menuUserRepository
      .query(`
        SELECT a.MENU_ID  FROM AUGE_USUAMENU a 
        JOIN AUGE_MENU b ON (a.MENU_ID = b.MENU_ID AND b.MENU_SISTEMA = :1)
        WHERE USME_ESTADO = 1 AND SISU_ID = :2 ORDER BY 1
    `, [idSistema, sisuId]);

    return menuUser.map((menu) => menu.MENU_ID);
    } catch (error) {
      console.log('error getMenuByUser', error);
    }
   
  }

  async getMenuPadreHijos() {
    try {
      const menus = await this.menuUserRepository.query(`
            SELECT MENU_ID, MENU_NOMBRE, MENU_PADRE FROM AUGE_MENU WHERE MENU_ESTADO = 1 ORDER BY MENU_ID
        `);

      const parentChildMapping: Record<number, number | null> = {};

      for (const menu of menus) {
        const menuId = menu.MENU_ID;
        const menuPadre = menu.MENU_PADRE;

        if (menuPadre !== null) {
          parentChildMapping[menuId] = menuPadre;
        }
      }

      return parentChildMapping;
    } catch (error) {
      // Manejo de errores
      console.error(error);
    }
  }

  async setApsUser(sisuId: number, fueraAps: number[], dentroAps: number[]) {
    try {
      for (const aps of dentroAps) {
        await this.apsUserRepository.query(`
        INSERT INTO TARIFICADOR.AUCO_APSUSUARIOS (APSA_ID, SISU_ID, APSI_ESTADO, APSI_FECREA) VALUES (TO_NUMBER(${aps}), TO_NUMBER(${sisuId}), 1, sysdate)
        `);
      }

      for (const aps of fueraAps) {
        await this.apsUserRepository.query(`
        UPDATE TARIFICADOR.AUCO_APSUSUARIOS
        SET APSI_ESTADO=1 , APSI_FECREA=sysdate
        WHERE APSA_ID=${aps} AND SISU_ID=${sisuId}
        `);
      }

      return { message: 'Aps asignadas exitosamente' };
    } catch (error) {
      console.log('error setApsUser', error);
    }
  }

  async asignarSistema(sisuId: number, asignados: number[], noAsignados: number[]) {
    try {
     
      const cantidadSistemas = await this.userRepository.query(`
        SELECT count(*)  FROM AUGE_SISTEMA WHERE SIST_ESTADO = 1 
      `);  

      const cantidadSistemaUsuario = await this.userRepository.query(`
        SELECT count(*) FROM AUGE_USUASISTEMA WHERE USUA_ID = :1
      `, [sisuId]);

      if (cantidadSistemaUsuario[0]['COUNT(*)'] != cantidadSistemas[0]['COUNT(*)']) {
          const idsSistemas = await this.userRepository.query(`
          SELECT SIST_ID FROM AUGE_SISTEMA WHERE SIST_ESTADO = 1
          `);

          for(const id of idsSistemas){
            await this.userRepository.query(`
              INSERT INTO TARIFICADOR.AUGE_USUASISTEMA
              (SIST_ID, USUA_ID, USSI_ESTADO, USSI_FECHA)
              VALUES(:1, :2, 0 , CURRENT_DATE )
            `, [id.SIST_ID, sisuId]);
          }
      }

      for (const id of asignados) {
        await this.userRepository.query(`
          UPDATE TARIFICADOR.AUGE_USUASISTEMA
          SET USSI_ESTADO = 1
          WHERE SIST_ID = :1 AND USUA_ID = :2
        `, [id, sisuId]);
      }

      for (const id of noAsignados) {
        await this.userRepository.query(`
          UPDATE TARIFICADOR.AUGE_USUASISTEMA
          SET USSI_ESTADO = 0
          WHERE SIST_ID = :1 AND USUA_ID = :2
        `, [id, sisuId]);
      }

      return { message: 'Aps asignadas exitosamente' };
    } catch (error) {
      console.log('error setApsUser', error);
    }
  }

  async AsignarMenu(body: any) {
    try {
      const { sisuId,  opcionesSinAsignar, opcionesAsignada} = body;

      const eliminarTodos: number[] = [...opcionesSinAsignar, ...opcionesAsignada];

      const sqlDesmarcar = `
      DELETE FROM 
        TARIFICADOR.AUGE_USUAMENU
      WHERE SISU_ID = :1 AND MENU_ID = :2`;

      for (const opcion of eliminarTodos) {
      await this.menuUserRepository.query(sqlDesmarcar, [sisuId, opcion]);
      }
      const sqlUpdt = `
        INSERT INTO 
          TARIFICADOR.AUGE_USUAMENU
          (USME_ID, SISU_ID, MENU_ID, USME_ESTADO)
        VALUES
          (SAUGE_USUAMENU.NEXTVAL, :1, :2, 1)`;
      for (const opcion of opcionesAsignada) {
        await this.menuUserRepository.query(sqlUpdt, [sisuId, opcion]);
      }
      return { message: 'Menu asignado exitosamente' };    
    } catch (error) {
      console.log('error AsignarMenu', error);
    }
  }

  async AsignarAps(body: any) {
    try {
      const { sisuId, apsSinAsignar, apsAsignadas } = body;

      const eliminarTodos: number[] = [...apsSinAsignar, ...apsAsignadas];

      const sqlDesmarcar = ` DELETE FROM TARIFICADOR.AUCO_APSUSUARIOS
      WHERE APSA_ID= :1 AND SISU_ID= :2`;

      for (const aps of eliminarTodos) {
        await this.apsUserRepository.query(sqlDesmarcar, [aps, sisuId]);
      }

      const sqlUpdt = `INSERT INTO TARIFICADOR.AUCO_APSUSUARIOS (APSA_ID, SISU_ID, APSI_ESTADO, APSI_FECREA) VALUES (:1, :2, 1, sysdate)`;

      for (const aps of apsAsignadas) {
        await this.apsUserRepository.query(sqlUpdt, [aps, sisuId]);
      }

      return { message: 'Aps asignadas exitosamente' };

    } catch (error) {
      console.log('error AsignarAps', error);
    }
  }

  async allSistemas() {
    try {
      return await this.userRepository.query(`
      SELECT SIST_ID, SIST_NOMBRE FROM AUGE_SISTEMA WHERE SIST_ESTADO = 1
      `);
    } catch (error) {
      return {message: 'Error al obtener los sistemas', error};
    }
  }
  async getSistemas(data){
    try {
      const correo = data.correo;
      console.log(correo);

      const idUsuario = await this.userRepository.query(`
        select sisu_id from auge_sisusuario where sisu_correo = '${correo}'
      `);

      const id = idUsuario[0].SISU_ID;

      return await this.apsUserRepository.query(`
        SELECT AS2.SIST_ID, AS2.SIST_NOMBRE 
        FROM AUGE_USUASISTEMA au 
        INNER JOIN AUGE_SISTEMA as2 
        ON (AU.SIST_ID = AS2.SIST_ID AND au.USSI_ESTADO = 1) 
        WHERE usua_id = :1
        `, [id]);     
    } catch (error) {
      return {message: 'Error al obtener los sistemas', error};
      
    }

  }
}
