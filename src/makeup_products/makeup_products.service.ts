import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MakeupProduct } from './entities/makeup_product.entity';
import { CreateMakeupProductDto } from './dto/create-makeup_product.dto';
import { UpdateMakeupProductDto } from './dto/update-makeup_product.dto';

@Injectable()
export class MakeupProductsService {
  constructor(
    @InjectRepository(MakeupProduct)
    private readonly makeupProductRepository: Repository<MakeupProduct>,
  ) {}

  async create(dto: CreateMakeupProductDto): Promise<MakeupProduct> {
    const newProduct = this.makeupProductRepository.create(dto);
    return await this.makeupProductRepository.save(newProduct);
  }

  async findAll(): Promise<MakeupProduct[]> {
    return await this.makeupProductRepository.find();
  }

  async findOne(id: string): Promise<MakeupProduct> {
    const product = await this.makeupProductRepository.findOne({ where: { id } });
    if (!product) {
      throw new NotFoundException(`Makeup product with ID ${id} not found`);
    }
    return product;
  }

  async update(id: string, updateDto: UpdateMakeupProductDto): Promise<MakeupProduct> {
    const product = await this.findOne(id);
    const updatedProduct = { ...product, ...updateDto };
    await this.makeupProductRepository.update(id, updatedProduct);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.findOne(id);
    await this.makeupProductRepository.delete(id);
  }
}
