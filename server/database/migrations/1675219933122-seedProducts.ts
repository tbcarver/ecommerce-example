import { MigrationInterface, QueryRunner } from "typeorm"
import * as fs from "fs";
import * as path from "path";
import { Product } from "../../src/product/product.entity";
import { User } from "../../src/user/user.entity";

export class seedProducts1675219933122 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        const productsJson = JSON.parse(fs.readFileSync(path.resolve(
            __dirname,
            '../seeders/products.json',
        ),
            'utf-8',
        ));

        const entities = productsJson.map(json => {
            const product = new Product();
            product.id = json.id;
            product.productName = json.product_name;
            product.description = json.description;
            product.style = json.style;
            product.brand = json.brand;
            product.url = json.url;
            product.productType = json.product_type;
            product.shippingPrice = json.shipping_price;
            product.note = json.note;
            product.user = new User(json.admin_id);
            product.adminId = json.admin_id;
            product.createdAt = json.created_at;
            product.updatedAt = json.updated_at;
            return product;
        });

        await queryRunner.manager.getRepository(Product).save(entities);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.getRepository(Product).clear();
    }

}
