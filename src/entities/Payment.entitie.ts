import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./User.entitie";

export enum PaymentType {
  CARD = "card",
  MONEY = "money",
}

@Entity("payments")
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "enum",
    enum: PaymentType,
    default: PaymentType.MONEY,
  })
  type: PaymentType;

  @Column({ nullable: true })
  Troco: string;

  @OneToOne(() => User, (user) => user.payment)
  @JoinColumn()
  user: User;
}
