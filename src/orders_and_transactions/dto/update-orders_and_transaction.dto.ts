import { PartialType } from '@nestjs/mapped-types';
import { CreateOrdersAndTransactionDto } from './create-orders_and_transaction.dto';

export class UpdateOrdersAndTransactionDto extends PartialType(CreateOrdersAndTransactionDto) {}
