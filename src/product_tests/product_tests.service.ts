import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductTest } from './entities/product_test.entity';
import { CreateProductTestDto } from './dto/create-product_test.dto';
import { UpdateProductTestDto } from './dto/update-product_test.dto';
import { UsersService } from '../users/users.service';
import { MakeupProductsService } from '../makeup_products/makeup_products.service';

@Injectable()
export class ProductTestsService {
  constructor(
    @InjectRepository(ProductTest)
    private readonly productTestRepository: Repository<ProductTest>,
    private readonly usersService: UsersService,
    private readonly makeupProductsService: MakeupProductsService,
  ) {}

  async create(dto: CreateProductTestDto): Promise<ProductTest> {
    // Buscar el usuario tester
    const tester = await this.usersService.findOne(dto.tester_id);
    if (!tester) {
      throw new NotFoundException(`User with ID ${dto.tester_id} not found`);
    }

    // Verificar que el usuario tenga role "Tester"
    if (tester.role !== 'Tester') {
      throw new ForbiddenException(`User with ID ${dto.tester_id} is not allowed to perform product tests`);
    }

    // Buscar el producto
    const product = await this.makeupProductsService.findOne(dto.product_id);
    if (!product) {
      throw new NotFoundException(`Makeup product with ID ${dto.product_id} not found`);
    }

    // Crear la prueba
    const newTest = this.productTestRepository.create({
      ...dto,
      tester,
      product,
    });

    return await this.productTestRepository.save(newTest);
  }
  async findAll(): Promise<ProductTest[]> {
    return await this.productTestRepository.find({ relations: ['tester', 'product'] });
  }
  

  async findOne(id: string): Promise<ProductTest> {
    const productTest = await this.productTestRepository.findOne({ where: { id } });
    if (!productTest) {
      throw new NotFoundException(`Product test with ID ${id} not found`);
    }
    return productTest;
  }

  async update(id: string, updateDto: UpdateProductTestDto): Promise<ProductTest> {
    const productTest = await this.findOne(id);
    const updatedTest = { ...productTest, ...updateDto };
    await this.productTestRepository.update(id, updatedTest);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.findOne(id);
    await this.productTestRepository.delete(id);
  }
}