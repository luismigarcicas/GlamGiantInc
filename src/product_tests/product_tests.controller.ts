import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductTestsService } from './product_tests.service';
import { CreateProductTestDto } from './dto/create-product_test.dto';
import { UpdateProductTestDto } from './dto/update-product_test.dto';

@Controller('product_tests')
export class ProductTestsController {
  constructor(private readonly productTestsService: ProductTestsService) {}

  @Post()
  create(@Body() createProductTestDto: CreateProductTestDto) {
    return this.productTestsService.create(createProductTestDto);
  }

  @Get()
  findAll() {
    return this.productTestsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productTestsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductTestDto: UpdateProductTestDto) {
    return this.productTestsService.update(id, updateProductTestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productTestsService.remove(id);
  }
}



