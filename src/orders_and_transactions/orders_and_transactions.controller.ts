import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { OrdersAndTransactionsService } from './orders_and_transactions.service';
import { CreateOrdersAndTransactionDto } from './dto/create-orders_and_transaction.dto';
import { UpdateOrdersAndTransactionDto } from './dto/update-orders_and_transaction.dto';
import { JwtAuthGuard } from 'src/auth/jwtAuthGuard';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles.decorator';

@Controller('orders_and_transactions')
 @UseGuards(JwtAuthGuard, RolesGuard) 
export class OrdersAndTransactionsController {
  constructor(private readonly ordersAndTransactionsService: OrdersAndTransactionsService) {}

  @Post()
  @Roles('Admin', 'Employee')
  create(@Body() createOrdersAndTransactionDto: CreateOrdersAndTransactionDto) {
    return this.ordersAndTransactionsService.create(createOrdersAndTransactionDto);
  }

  @Get()
  @Roles('Admin', 'Employee')
  findAll() {
    return this.ordersAndTransactionsService.findAll();
  }

  @Get(':id')
  @Roles('Admin', 'Employee')
  findOne(@Param('id') id: string) {
    return this.ordersAndTransactionsService.findOne(id); 
  }

  @Patch(':id')
  @Roles('Admin', 'Employee')
  update(@Param('id') id: string, @Body() updateOrdersAndTransactionDto: UpdateOrdersAndTransactionDto) {
    return this.ordersAndTransactionsService.update(id, updateOrdersAndTransactionDto); 
  }

  @Delete(':id')
  @Roles('Admin', 'Employee')
  remove(@Param('id') id: string) {
    return this.ordersAndTransactionsService.remove(id); 
  }
}