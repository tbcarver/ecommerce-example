import { MigrationInterface, QueryRunner } from "typeorm"
import * as fs from "fs";
import * as path from "path";
import { User } from "../../src/user/user.entity";

export class seedUsers1675213914814 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // const users = JSON.parse(fs.readFileSync(path.join(__dirname, "../seeders/users.json", "utf-8")));

        // const inventoryItems = JSON.parse(fs.readFileSync("../seeders/inventoryItems.json", "utf-8"));
        const usersJson = JSON.parse(fs.readFileSync(path.resolve(
            __dirname,
            '../seeders/users.json',
        ),
            'utf-8',
        ));

        const entities = usersJson.map(json => {
            const user = new User();
            user.id = json.id;
            user.name = json.name;
            user.email = json.email;
            user.passwordHash = json.password_hash;
            user.passwordPlain = json.password_plain;
            user.superadmin = json.superadmin === 0 ? false : true;
            user.shopName = json.shop_name;
            user.rememberToken = json.remember_token;
            user.createdAt = json.created_at;
            user.updatedAt = json.updated_at;
            user.cardBrand = json.card_brand;
            user.cardLastFour = json.card_last_four;
            user.trialEndsAt = json.trial_ends_at;
            user.shopDomain = json.shop_domain;
            user.isEnabled = json.is_enabled === 0 ? false : true;
            user.billingPlan = json.billing_plan;
            user.trialStartsAt = json.trial_starts_at;
            return user;
        });

        await queryRunner.manager.getRepository(User).save(entities);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.getRepository(User).clear();
    }
}