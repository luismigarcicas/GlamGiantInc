import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProductTestsService } from './product_tests.service';
import { CreateProductTestDto } from './dto/create-product_test.dto';
import { UpdateProductTestDto } from './dto/update-product_test.dto';
import { JwtAuthGuard } from 'src/auth/jwtAuthGuard';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles.decorator';

@Controller('product_tests')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ProductTestsController {
  constructor(private readonly productTestsService: ProductTestsService) {}

  @Post()
  @Roles('Admin', 'Employee')
  create(@Body() createProductTestDto: CreateProductTestDto) {
    return this.productTestsService.create(createProductTestDto);
  }

  @Get()
  @Roles('Admin', 'Employee')
  findAll() {
    return this.productTestsService.findAll();
  }

  @Get(':id')
  @Roles('Admin', 'Employee')
  findOne(@Param('id') id: string) {
    return this.productTestsService.findOne(id);
  }

  @Patch(':id')
  @Roles('Admin', 'Employee')
  update(@Param('id') id: string, @Body() updateProductTestDto: UpdateProductTestDto) {
    return this.productTestsService.update(id, updateProductTestDto);
  }

  @Delete(':id')
  @Roles('Admin', 'Employee')
  remove(@Param('id') id: string) {
    return this.productTestsService.remove(id);
  }
}



