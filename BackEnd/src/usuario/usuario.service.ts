import {Injectable} from "@nestjs/common";
import {UsuarioEntity} from "./usuario.entity";
import {getMongoManager, getMongoRepository} from "typeorm";

@Injectable()
export class UsuarioService {

    constructor() {

    }

    crearUsuario(usuario: UsuarioEntity) {
        const manager = getMongoManager();
        return manager.save(usuario);
    }

    async listarTodos(): Promise<UsuarioEntity[]> {
        const manager = getMongoRepository(UsuarioEntity);
        return await manager.find();
    }
}