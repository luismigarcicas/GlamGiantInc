import { IsBoolean, IsInt, IsOptional, IsString, IsUUID, Max, Min } from "class-validator";

export class CreateProductTestDto {

    @IsUUID()
    tester_id: string;

    @IsUUID()
    product_id: string;

    @IsOptional()
    @IsString()
    reaction?: string;

    @IsOptional()
    @IsInt()
    @Min(1)
    @Max(10)
    rating?: number;

    @IsBoolean()
    survival_status: boolean;
  
}
