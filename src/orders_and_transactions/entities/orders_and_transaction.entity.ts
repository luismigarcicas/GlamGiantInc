import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, JoinColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class OrdersAndTransaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, { eager: true, onDelete: 'CASCADE' }) // ✅ Relación con Users
  @JoinColumn({ name: 'client_id' }) // ✅ Se guarda en la base de datos como 'client_id'
  client: User;

  @Column("simple-array") // ✅ Guarda los productos como un array de UUIDs
  products: string[];

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  total_amount: number;

  @Column({ type: 'enum', enum: ['Paid', 'Refunded', 'Failed'] })
  payment_status: 'Paid' | 'Refunded' | 'Failed';

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

