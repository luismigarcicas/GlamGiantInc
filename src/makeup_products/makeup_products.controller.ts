import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { MakeupProductsService } from './makeup_products.service';
import { CreateMakeupProductDto } from './dto/create-makeup_product.dto';
import { UpdateMakeupProductDto } from './dto/update-makeup_product.dto';
import { JwtAuthGuard } from 'src/auth/jwtAuthGuard';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles.decorator';

@Controller('makeup_products')
@UseGuards(JwtAuthGuard, RolesGuard) 
export class MakeupProductsController {
  constructor(private readonly makeupProductsService: MakeupProductsService) {}

  @Post()
  @Roles('Admin', 'Employee')
  create(@Body() createDto: CreateMakeupProductDto) {
    return this.makeupProductsService.create(createDto);
  }

  @Get()
  @Roles('Admin', 'Employee')
  findAll() {
    return this.makeupProductsService.findAll();
  }

  @Get(':id')
  @Roles('Admin', 'Employee')
  findOne(@Param('id') id: string) {
    return this.makeupProductsService.findOne(id);
  }

  @Patch(':id')
  @Roles('Admin', 'Employee')
  update(@Param('id') id: string, @Body() updateDto: UpdateMakeupProductDto) {
    return this.makeupProductsService.update(id, updateDto);
  }

  @Delete(':id')
  @Roles('Admin', 'Employee')
  remove(@Param('id') id: string) {
    return this.makeupProductsService.remove(id);
  }
}
