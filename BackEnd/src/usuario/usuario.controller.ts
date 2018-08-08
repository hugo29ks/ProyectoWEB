import {Body, Controller, Get, HttpStatus, Post, Req, Res} from "@nestjs/common";
import {UsuarioService} from "./usuario.service";
import {UsuarioEntity} from "./usuario.entity";
import {UsuarioPipe} from "../pipes/usuario.pipe";
import {USUARIO_SCHEMA} from "./usuario.schema";

@Controller('Usuario')
export class UsuarioController {

    constructor(private _usuarioService: UsuarioService){

    }

    @Post()
    crearUsuario(@Body() bodyParams){
        const usuarioNuevo = new UsuarioEntity();
        usuarioNuevo.user = bodyParams.user;
        usuarioNuevo.password = bodyParams.password;
        usuarioNuevo.nombreUsuario = bodyParams.nombreUsuario;
        usuarioNuevo.apellidoUsuario = bodyParams.apellidoUsuario;

        return this._usuarioService.crearUsuario(usuarioNuevo);
    }

    @Get()
    async listarTodos(@Res() response,
                @Req() request) {
        const usuarios = await this._usuarioService.listarTodos();
        if(Object.keys(usuarios).length === 0) {
            return response.send({
                mensaje: "No existe ningun Usuario",
                estado: HttpStatus.NOT_FOUND,
            });
        } else {
            return response.status(202).send(usuarios);
        }
    }

}