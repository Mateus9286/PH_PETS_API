import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
} from "typeorm";
import { Address } from "./Address.entitie";
import { Payment } from "./Payment.entitie";
import { getRounds, hashSync } from "bcryptjs";
import { ProductList } from "./ProductList.entitie";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false })
  admin: boolean;

  @Column({ type: "varchar", length: 45, unique: true })
  name: string;

  @Column({ nullable: true })
  password: string;

  @OneToOne(() => Address, (address) => address.user, { cascade: true })
  address: Address;

  @OneToMany(() => ProductList, (product) => product.user)
  productsList: ProductList[];

  @OneToOne(() => Payment, (payment) => payment.user, { cascade: true })
  payment: Payment;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const isEncrypted = getRounds(this.password);
    if (!isEncrypted) {
      this.password = hashSync(this.password, 10);
    }
  }
}
