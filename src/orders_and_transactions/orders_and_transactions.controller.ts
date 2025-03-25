import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrdersAndTransactionsService } from './orders_and_transactions.service';
import { CreateOrdersAndTransactionDto } from './dto/create-orders_and_transaction.dto';
import { UpdateOrdersAndTransactionDto } from './dto/update-orders_and_transaction.dto';

@Controller('orders_and_transactions')
export class OrdersAndTransactionsController {
  constructor(private readonly ordersAndTransactionsService: OrdersAndTransactionsService) {}

  @Post()
  create(@Body() createOrdersAndTransactionDto: CreateOrdersAndTransactionDto) {
    return this.ordersAndTransactionsService.create(createOrdersAndTransactionDto);
  }

  @Get()
  findAll() {
    return this.ordersAndTransactionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersAndTransactionsService.findOne(id); 
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrdersAndTransactionDto: UpdateOrdersAndTransactionDto) {
    return this.ordersAndTransactionsService.update(id, updateOrdersAndTransactionDto); 
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersAndTransactionsService.remove(id); 
  }
}