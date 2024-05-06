import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../auth/entities/user.entity';
import { BrcyptHelper } from 'src/helpers/bcrypt.helper';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { AucoApsusuarios } from './entities/apsxUser.entity';
import { AugeMenu } from './entities/menu-user.entity';
import { Aps } from 'src/aps/entities/aps.entity';
import { AugeDeadtoken } from './entities/deadToken.entity';

@Module({
  controllers: [AuthController],
  providers: [AuthService, BrcyptHelper, JwtStrategy],
  imports: [
    TypeOrmModule.forFeature([User, AucoApsusuarios, AugeMenu, Aps,AugeDeadtoken]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [],
      inject: [],
      useFactory: () => {
        return {
          secret: process.env.JWT_SECRET,
          signOptions: { expiresIn: '10h' },
        };
      },
    }),
  ],

  exports: [TypeOrmModule, JwtStrategy, PassportModule, JwtModule],
})
export class AuthModule {}
