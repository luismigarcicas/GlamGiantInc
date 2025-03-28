import { IsAlphanumeric, IsArray, IsNumber, IsUUID, IsEnum} from "class-validator";

export class CreateOrdersAndTransactionDto {
    @IsUUID()
    client_id: string;

    @IsArray()
    @IsUUID("all", {each: true}) //cada elemento debe ser uuid
    products: string[];

    @IsNumber()
    total_amount: number;

    @IsEnum(['Paid', 'Refunded', 'Failed'])
    payment_status: 'Paid' | 'Refunded' | 'Failed';

}
