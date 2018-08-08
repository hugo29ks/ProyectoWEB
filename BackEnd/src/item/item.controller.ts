import {Body, Controller, Get, HttpStatus, Post, Req, Res} from "@nestjs/common";
import {ItemService} from "./item.service";
import {ItemEntity} from "./item.entity";

@Controller('Item')
export class ItemController {

    constructor(private _itemService: ItemService) {

    }

    @Post()
    crearItem(@Body() bodyParams) {
        const itemNuevo = new ItemEntity();
        itemNuevo.nombreItem = bodyParams.nombreItem;
        itemNuevo.tipo = bodyParams.tipo;
        itemNuevo.fabricante = bodyParams.fabricante;
        itemNuevo.modelo = bodyParams.modelo;
        itemNuevo.numeroSerie = bodyParams.numeroSerie;
        itemNuevo.localizacion = bodyParams.localizacion;
        itemNuevo.estado = bodyParams.estado;
        itemNuevo.anioAdquisicion = bodyParams.anioAdquisicion;
        itemNuevo.proveedor = bodyParams.proveedor;
        itemNuevo.ultimoMantenimiento = bodyParams.ultimoMantenimiento;
        itemNuevo.ultimaActualizacion = bodyParams.ultimaActualizacion;
        itemNuevo.empleado = bodyParams.empleado;
        itemNuevo.comentario = bodyParams.comentario;

        return this._itemService.crearItem(itemNuevo);
    }

    @Get()
    async listarTodos(@Res() response,
                      @Req() request) {
        const items = await this._itemService.listarTodos();
        if(Object.keys(items).length === 0) {
            return response.send({
                mensaje: "No existe ningun Item",
                estado: HttpStatus.NOT_FOUND,
            });
        } else {
            return response.status(202).send(items);
        }
    }
}