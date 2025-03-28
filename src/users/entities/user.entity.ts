import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ProductTest } from '../../product_tests/entities/product_test.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: ['Admin', 'Client', 'Tester', 'Employee'] })
  role: string; 

  @Column({ default: false })
  test_subject_status: boolean; 

  @Column('text', { nullable: true })
  allergic_reactions: string; 

  @Column('simple-array', { nullable: true })
  purchase_history: string[]; 

  
}
