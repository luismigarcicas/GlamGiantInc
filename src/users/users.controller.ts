import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/auth/jwtAuthGuard';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles.decorator';

@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard) 
export class UsersController {
  constructor(private readonly usersService: UsersService) {}


  @Post()
  @Roles('Admin', 'Employee') 
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  
  @Get()
  @Roles('Admin', 'Employee')
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @Roles('Admin', 'Employee')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }


  @Patch(':id')
  @Roles('Admin', 'Employee')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  // Eliminar un usuario
  @Delete(':id')
  @Roles('Admin', 'Employee')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
