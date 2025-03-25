import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MakeupProductsService } from './makeup_products.service';
import { CreateMakeupProductDto } from './dto/create-makeup_product.dto';
import { UpdateMakeupProductDto } from './dto/update-makeup_product.dto';

@Controller('makeup_products')
export class MakeupProductsController {
  constructor(private readonly makeupProductsService: MakeupProductsService) {}

  @Post()
  create(@Body() createDto: CreateMakeupProductDto) {
    return this.makeupProductsService.create(createDto);
  }

  @Get()
  findAll() {
    return this.makeupProductsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.makeupProductsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdateMakeupProductDto) {
    return this.makeupProductsService.update(id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.makeupProductsService.remove(id);
  }
}
