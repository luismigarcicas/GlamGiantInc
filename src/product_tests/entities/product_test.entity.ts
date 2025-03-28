import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { MakeupProduct } from '../../makeup_products/entities/makeup_product.entity';

@Entity()
export class ProductTest {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, { eager: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'tester_id' }) 
  tester: User;

  @ManyToOne(() => MakeupProduct, { eager: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'product_id' })
  product: MakeupProduct;

  @Column({ type: 'text', nullable: true })
  reaction: string;

  @Column({ type: 'int', nullable: true })
  rating: number;

  @Column({ type: 'boolean', default: false })
  survival_status: boolean;
}
