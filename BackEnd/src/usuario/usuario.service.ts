import {Injectable} from "@nestjs/common";
import {UsuarioEntity} from "./usuario.entity";
import {getMongoManager} from "typeorm";

@Injectable()
export class UsuarioService {
    constructor(
        ) {

    }

    crearUsuario() {
    const manager = getMongoManager();
            const usuario = new UsuarioEntity();
            usuario.user = "shan4ty300";
            usuario.password = "pp300";
            usuario.nombreUsuario = "Ronny";
            usuario.apellidoUsuario = "Cabrera";
        return manager.save(usuario);
    }
}