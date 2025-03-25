import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductTestsService } from './product_tests.service';
import { ProductTestsController } from './product_tests.controller';
import { ProductTest } from './entities/product_test.entity';
import { UsersModule } from '../users/users.module';
import { MakeupProductsModule } from '../makeup_products/makeup_products.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductTest]), 
    UsersModule, 
    MakeupProductsModule
  ],
  controllers: [ProductTestsController],
  providers: [ProductTestsService],
  exports: [ProductTestsService], 
})
export class ProductTestsModule {}
