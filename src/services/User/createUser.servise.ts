import { Address, Payment, User } from "../../entities";
import { ProductList } from "../../entities/ProductList.entitie";
import { AppDataSource } from "../../data-source";
import { IUser } from "../../interfaces/users.interface";
import { Repository } from "typeorm";

export const createUserService = async (data: IUser): Promise<void> => {
  const { admin, name, password, productsList } = data;
  const { number, street, phone, neighborhood } = data.address!;
  const { type, Troco } = data.payment;

  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const addressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);
  const paymentRepository: Repository<Payment> =
    AppDataSource.getRepository(Payment);
  const productListRepository: Repository<ProductList> =
    AppDataSource.getRepository(ProductList);

  const user: User = new User();
  user.admin = admin!;
  user.name = name;
  user.password = password || process.env.SECRET_KEY!;

  const savedUser: User = await userRepository.save(user);

  const address: Address = new Address();
  address.number = number;
  address.street = street;
  address.phone = phone;
  address.neighborhood = neighborhood;
  address.user = savedUser;

  await addressRepository.save(address);

  const payment: Payment = new Payment();
  payment.type = type;
  payment.Troco = String(Troco);
  payment.user = savedUser;

  await paymentRepository.save(payment);
  const productEntities: ProductList[] = productsList.map((productInfo) => {
    const product: ProductList = new ProductList();
    product.category = productInfo.category;
    product.name_product = productInfo.name_product;
    product.price = Number(productInfo.price);
    product.description = productInfo.description;
    product.img = productInfo.img;
    product.user = savedUser;

    return product;
  });

  await productListRepository.save(productEntities);
};
