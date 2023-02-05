import { MigrationInterface, QueryRunner } from "typeorm"
import * as fs from "fs";
import * as path from "path";
import { Order } from "../../src/order/order.entity";
import { Product } from "../../src/product/product.entity";
import { InventoryItem } from "../../src/inventoryItem/inventoryItem.entity";

export class seedOrders1675259912639 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        const ordersJson = JSON.parse(fs.readFileSync(path.resolve(
            __dirname,
            '../seeders/orders.json',
        ),
            'utf-8',
        ));

        const entities = ordersJson.map(json => {
            const order = new Order();
            order.id = json.id;
            order.product = new Product(json.product_id);
            order.inventoryItem = new InventoryItem(json.inventory_id);
            order.streetAddress = json.street_address;
            order.apartment = json.apartment;
            order.city = json.city;
            order.state = json.state;
            order.countryCode = json.country_code;
            order.zip = json.zip;
            order.phoneNumber = json.phone_number;
            order.email = json.email;
            order.name = json.name;
            order.orderStatus = json.order_status;
            order.paymentRef = json.payment_ref;
            order.transactionId = json.transaction_id;
            order.paymentAmtCents = json.payment_amt_cents;
            order.shipChargedCents = json.ship_charged_cents;
            order.shipCostCents = json.ship_cost_cents;
            order.subtotalCents = json.subtotal_cents;
            order.totalCents = json.total_cents;
            order.shipperName = json.shipper_name;
            order.paymentDate = json.payment_date;
            order.shippedDate = json.shipped_date;
            order.trackingNumber = json.tracking_number;
            order.taxTotalCents = json.tax_total_cents;
            order.createdAt = json.created_at;
            order.updatedAt = json.updated_at;
            return order;
        });

        await queryRunner.manager.getRepository(Order).save(entities);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.getRepository(Order).clear();
    }

}
