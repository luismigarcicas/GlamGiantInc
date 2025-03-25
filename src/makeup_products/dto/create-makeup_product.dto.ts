import { IsString, IsEnum, IsInt, Min, Max } from 'class-validator';

export class CreateMakeupProductDto {
  @IsString()
  name: string;

  @IsEnum(['Lipstick', 'Foundation', 'Eyeshadow', 'Mascara', 'Blush'])
  category: string;

  @IsInt()
  stock: number;

  @IsString()
  warehouse_location: string;

  @IsInt()
  @Min(1)
  @Max(10)
  durability_score: number;
}
