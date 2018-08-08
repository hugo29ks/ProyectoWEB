import {Column, Entity, ObjectID, ObjectIdColumn} from "typeorm";

@Entity('item')
export class ItemEntity {
    @ObjectIdColumn()
    idItem: ObjectID;

    @Column({ length: 500 })
    nombreItem: string;

    @Column({ length: 500 })
    tipo: string;

    @Column({ length: 500 })
    fabricante: string;

    @Column({ length: 500 })
    modelo: string;

    @Column({ length: 500 })
    numeroSerie: string;

    @Column({ length: 500 })
    localizacion: string;

    @Column({ length: 500 })
    estado: boolean;

    @Column({ length: 500 })
    anioAdquisicion: string;

    @Column({ length: 500 })
    proveedor: string;

    @Column({ length: 500 })
    ultimoMantenimiento: string;

    @Column({ length: 500 })
    ultimaActualizacion: string;

    @Column({ length: 500 })
    empleado: string;

    @Column({ length: 500 })
    comentario: string;
}