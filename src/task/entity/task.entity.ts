import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { CommentaryEntity } from './commentary.entity'

@Entity()
export class TaskEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    assignedTo: string

    @Column()
    description: string

    @OneToMany(() => CommentaryEntity, (commentary: CommentaryEntity) => commentary.task)
    commentary: CommentaryEntity[]

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
