import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

export enum LinkPrecedence {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

@Entity('contacts')
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: true })
  phoneNumber?: string;

  @Column({ type: 'varchar', nullable: true })
  email?: string;

  @Column({ type: 'int', nullable: true })
  linkedId?: number;

  @Column({
    type: 'enum',
    enum: LinkPrecedence,
    default: LinkPrecedence.PRIMARY,
  })
  linkPrecedence: LinkPrecedence;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deletedAt?: Date;
}
