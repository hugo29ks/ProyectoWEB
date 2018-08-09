import {Column, Entity, ObjectID, ObjectIdColumn} from "typeorm";

@Entity('usuario')
export class UsuarioEntity {
    @ObjectIdColumn()
    idUsuario: ObjectID;

    @Column({ length: 500 })
    user: string;

    @Column({ length: 500 })
    password: string;

    @Column({ length: 500 })
    nombreUsuario: string;

    @Column({ length: 500 })
    apellidoUsuario: string;
}