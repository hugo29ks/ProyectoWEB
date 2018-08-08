import * as Joi from'joi';

export const ITEM_ESCHEMA = Joi
    .object()
    .keys({
        nombreItem: Joi
            .string()
            .regex(/^[a-zA-Z]{3,30}$/)
            .min(3)
            .max(30),
        password: Joi
            .string()
            .regex(/^[a-zA-Z0-9]{3,30}$/)
            .min(8)
            .max(10),
        tipo: Joi
            .string()
            .regex(/^[a-zA-Z]{3,30}$/)
            .min(3)
            .max(30),
        fabricante: Joi
            .string()
            .regex(/^[a-zA-Z]{3,30}$/)
            .min(3)
            .max(30),
        modelo: Joi
            .string()
            .regex(/^[a-zA-Z0-9]{3,30}$/)
            .min(3)
            .max(30),
        numeroSerie: Joi
            .string()
            .regex(/^[a-zA-Z0-9]{3,30}$/)
            .min(3)
            .max(30),
        localizacion: Joi
            .string()
            .regex(/^[a-zA-Z]{3,30}$/)
            .min(3)
            .max(30),
        estado:Joi
            .boolean(),
        anioAdquisicion: Joi
            .date()
            .format('YYYY'),
        proveedor: Joi
            .string()
            .regex(/^[a-zA-Z]{3,30}$/)
            .min(3)
            .max(30),
        ultimoMantenimiento: Joi
            .date(),
        ultimaActualizacion: Joi
            .date(),
        comentario: Joi
            .string()
            .regex(/^[a-zA-Z]{3,50}$/)
            .min(3)
            .max(30),

    });