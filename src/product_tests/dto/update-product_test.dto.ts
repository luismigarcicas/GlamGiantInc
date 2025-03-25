import { PartialType } from '@nestjs/mapped-types';
import { CreateProductTestDto } from './create-product_test.dto';

export class UpdateProductTestDto extends PartialType(CreateProductTestDto) {}
