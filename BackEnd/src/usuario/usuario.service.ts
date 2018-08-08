import {Injectable} from "@nestjs/common";
import {UsuarioEntity} from "./usuario.entity";
import {getMongoManager} from "typeorm";

@Injectable()
export class UsuarioService {

    constructor() {

    }

    crearUsuario(usuario: UsuarioEntity): Promise<UsuarioEntity> {
        const manager = getMongoManager();
        return manager.save(usuario);
    }
}