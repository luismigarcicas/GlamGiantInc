import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrdersAndTransaction } from './entities/orders_and_transaction.entity';
import { CreateOrdersAndTransactionDto } from './dto/create-orders_and_transaction.dto';
import { UpdateOrdersAndTransactionDto } from './dto/update-orders_and_transaction.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class OrdersAndTransactionsService {
  constructor(
    @InjectRepository(OrdersAndTransaction)
    private readonly ordersRepository: Repository<OrdersAndTransaction>,
    private readonly usersService: UsersService, 
  ) {}

  async create(dto: CreateOrdersAndTransactionDto): Promise<OrdersAndTransaction> {
    const client = await this.usersService.findOne(dto.client_id);
    if (!client) {
      throw new NotFoundException(`Client with ID ${dto.client_id} not found`);
    }

    const newOrder = this.ordersRepository.create({
      ...dto,
      client, 
    });
    return await this.ordersRepository.save(newOrder);
  }

  async findAll(): Promise<OrdersAndTransaction[]> {
    return await this.ordersRepository.find();
  }

  async findOne(id: string): Promise<OrdersAndTransaction> {
    const order = await this.ordersRepository.findOne({ where: { id } });
    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }
    return order;
  }

  async update(id: string, updateDto: UpdateOrdersAndTransactionDto): Promise<OrdersAndTransaction> {
    const order = await this.findOne(id);
    const updatedOrder = { ...order, ...updateDto };
    await this.ordersRepository.update(id, updatedOrder);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.findOne(id); // verifica si la orden existe antes de eliminar
    await this.ordersRepository.delete(id);
  }
}