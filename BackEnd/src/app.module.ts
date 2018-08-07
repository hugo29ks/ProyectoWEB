import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioEntity} from "./usuario/usuario.entity";
import {UsuarioController} from "./usuario/usuario.controller";
import {UsuarioService} from "./usuario/usuario.service";

@Module({
  imports: [
      TypeOrmModule.forRoot({
          type: 'mongodb',
          host: 'localhost',
          port: 27017,
          username: '',
          password: '',
          database: 'test',
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          synchronize: true,
      }),
      TypeOrmModule.forFeature([UsuarioEntity])
  ],
  controllers: [AppController, UsuarioController],
  providers: [AppService, UsuarioService],
})
export class AppModule {}
