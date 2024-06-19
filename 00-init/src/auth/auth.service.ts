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
      const { sisuCorreo, sisuPass } = LoginUserDTO;
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

  async getMenuUser(sisuId: number) {
    return await this.menuUserRepository.query(`
   SELECT m.menu_id FROM AUGE_MENU m JOIN AUGE_USUAMENU au on m.menu_id=au.MENU_ID WHERE au.SISU_ID = ${sisuId} AND au.USME_ESTADO = 1 AND m.MENU_ESTADO = 1 ORDER BY m.menu_id ASC
   `);
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
}
