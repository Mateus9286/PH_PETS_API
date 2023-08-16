import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  category: string;

  @Column()
  name_product: string;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  price: number;

  @Column()
  description: string;

  @Column()
  img: string;
}
