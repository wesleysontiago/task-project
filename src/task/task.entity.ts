import { Entity, OneToOne, JoinColumn,Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, OneToMany } from 'typeorm'

@Entity()
export class TaskEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    commentary: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updtedAt: Date
}
