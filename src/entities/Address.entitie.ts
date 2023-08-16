import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./User.entitie";

@Entity("addresses")
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  number: string;

  @Column()
  street: string;

  @Column()
  phone: string;

  @Column()
  neighborhood: string;

  @OneToOne(() => User, (user) => user.address)
  @JoinColumn()
  user: User;
}
