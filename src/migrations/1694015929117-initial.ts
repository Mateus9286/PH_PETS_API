import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1694015929117 implements MigrationInterface {
  name = "Initial1694015929117";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."payments_type_enum" AS ENUM ('card', 'money')`
    );
    await queryRunner.query(
      `CREATE TABLE "payments" ("id" SERIAL NOT NULL, "type" "public"."payments_type_enum" NOT NULL DEFAULT 'money', "Troco" character varying, "userId" integer, CONSTRAINT "REL_d35cb3c13a18e1ea1705b2817b" UNIQUE ("userId"), CONSTRAINT "PK_197ab7af18c93fbb0c9b28b4a59" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "products_list" ("id" SERIAL NOT NULL, "category" character varying NOT NULL, "name_product" character varying NOT NULL, "price" numeric(10,2) NOT NULL, "description" character varying NOT NULL, "img" character varying NOT NULL, "userId" integer, CONSTRAINT "PK_f1c579aeb72ae80d6930429a7c9" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "users" ("id" SERIAL NOT NULL, "admin" boolean NOT NULL DEFAULT false, "name" character varying(45) NOT NULL, "password" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_51b8b26ac168fbe7d6f5653e6cf" UNIQUE ("name"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "addresses" ("id" SERIAL NOT NULL, "number" character varying NOT NULL, "street" character varying NOT NULL, "phone" character varying NOT NULL, "neighborhood" character varying NOT NULL, "userId" integer, CONSTRAINT "REL_95c93a584de49f0b0e13f75363" UNIQUE ("userId"), CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "products" ("id" SERIAL NOT NULL, "category" character varying NOT NULL, "name_product" character varying NOT NULL, "price" numeric(10,2) NOT NULL, "description" character varying NOT NULL, "img" character varying NOT NULL, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `ALTER TABLE "payments" ADD CONSTRAINT "FK_d35cb3c13a18e1ea1705b2817b1" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "products_list" ADD CONSTRAINT "FK_b8f8fc0a249162f41f75f9dc5fe" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "addresses" ADD CONSTRAINT "FK_95c93a584de49f0b0e13f753630" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "addresses" DROP CONSTRAINT "FK_95c93a584de49f0b0e13f753630"`
    );
    await queryRunner.query(
      `ALTER TABLE "products_list" DROP CONSTRAINT "FK_b8f8fc0a249162f41f75f9dc5fe"`
    );
    await queryRunner.query(
      `ALTER TABLE "payments" DROP CONSTRAINT "FK_d35cb3c13a18e1ea1705b2817b1"`
    );
    await queryRunner.query(`DROP TABLE "products"`);
    await queryRunner.query(`DROP TABLE "addresses"`);
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`DROP TABLE "products_list"`);
    await queryRunner.query(`DROP TABLE "payments"`);
  }
}
