import {Injectable} from "@nestjs/common";
import {ItemEntity} from "./item.entity";
import {Equal, getManager, getMongoRepository} from "typeorm";

@Injectable()
export class ItemService {
    constructor() {

    }

    crearItem(item: ItemEntity) {
        const manager = getManager();
        return manager.save(item);
    }

    async listarTodos(element: string): Promise<ItemEntity[]> {
        const manager = getMongoRepository(ItemEntity);
        return await manager.find({elemento: element});
    }
}