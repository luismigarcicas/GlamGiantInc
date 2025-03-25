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
  role: string; // ✅ Rol del usuario

  @Column({ default: false })
  test_subject_status: boolean; // ✅ Si el usuario es sujeto de prueba

  @Column('text', { nullable: true })
  allergic_reactions: string; // ✅ Posibles alergias

  @Column('simple-array', { nullable: true })
  purchase_history: string[]; // ✅ Historial de compras (IDs de órdenes)

  
}
