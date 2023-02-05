import { MigrationInterface, QueryRunner } from "typeorm"
import * as fs from "fs";
import * as path from "path";
import { InventoryItem } from "../../src/inventoryItem/inventoryItem.entity";
import { Product } from "../../src/product/product.entity";

export class seedInventoryItems1675223914813 implements MigrationInterface {
    name = 'seedInventoryItems1675223914813'

    public async up(queryRunner: QueryRunner): Promise<void> {
        const inventoryItemsJson = JSON.parse(fs.readFileSync(path.resolve(
            __dirname,
            '../seeders/inventoryItems.json',
        ),
            'utf-8',
        ));

        const entities = inventoryItemsJson.map(json => {

            const inventoryItem = new InventoryItem();
            inventoryItem.id = json.id;
            inventoryItem.product = new Product(json.product_id);
            inventoryItem.quantity = json.quantity;
            inventoryItem.color = json.color;
            inventoryItem.size = json.size;
            inventoryItem.weight = json.weight;
            inventoryItem.priceCents = json.price_cents;
            inventoryItem.salePriceCents = json.sale_price_cents;
            inventoryItem.costCents = json.cost_cents;
            inventoryItem.sku = json.sku;
            inventoryItem.length = json.length;
            inventoryItem.width = json.width;
            inventoryItem.height = json.height;
            inventoryItem.note = json.note;
            return inventoryItem;
        });

        await queryRunner.manager.getRepository(InventoryItem).save(entities);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.getRepository(InventoryItem).clear();
    }
}