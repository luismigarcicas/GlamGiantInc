import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity()
export class MakeupProduct {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ type: 'enum', enum: ['Lipstick', 'Foundation', 'Eyeshadow', 'Mascara', 'Blush'] })
  category: string;

  @Column({ type: 'int' })
  stock: number;

  @Column()
  warehouse_location: string;

  @Column({ type: 'int', default: 0 })
  durability_score: number;


}
