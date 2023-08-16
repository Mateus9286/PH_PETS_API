import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User.entitie";

@Entity("products_list")
export class ProductList {
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

  @ManyToOne(() => User, (user) => user.productsList)
  user: User;
}
