import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { ProductTestsModule } from './product_tests/product_tests.module';
import { MakeupProductsModule } from './makeup_products/makeup_products.module';
import { OrdersAndTransactionsModule } from './orders_and_transactions/orders_and_transactions.module';

@Module({
  imports: [
    ConfigModule.forRoot(), 
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL, 
      autoLoadEntities: true,
      synchronize: true, //  Solo en desarrollo, no en producción
    }),
    UsersModule,
    ProductTestsModule,
    MakeupProductsModule,
    OrdersAndTransactionsModule,
  ],
})
export class AppModule {}

