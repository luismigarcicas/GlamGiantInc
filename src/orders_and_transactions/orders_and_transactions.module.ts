import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersAndTransactionsService } from './orders_and_transactions.service';
import { OrdersAndTransactionsController } from './orders_and_transactions.controller';
import { OrdersAndTransaction } from './entities/orders_and_transaction.entity';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([OrdersAndTransaction]),
    UsersModule
  ],
  controllers: [OrdersAndTransactionsController],
  providers: [OrdersAndTransactionsService],
})
export class OrdersAndTransactionsModule {}
