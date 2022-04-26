import { Entity, OneToOne, JoinColumn,Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, OneToMany } from 'typeorm'

@Entity()
export class TaskEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    assignedTo: string

    @Column()
    description: string

    @Column()
    commentary: string

    @Column()
    state: string

    @Column()
    severity: string

    @Column()
    area: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updtedAt: Date
}
