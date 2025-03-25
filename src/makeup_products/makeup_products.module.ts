import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MakeupProductsService } from './makeup_products.service';
import { MakeupProductsController } from './makeup_products.controller';
import { MakeupProduct } from './entities/makeup_product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MakeupProduct])], 
  controllers: [MakeupProductsController],
  providers: [MakeupProductsService],
  exports: [MakeupProductsService], 
})
export class MakeupProductsModule {}