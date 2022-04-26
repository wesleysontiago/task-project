import { EntitySchema } from 'typeorm';
import { TaskEntity } from './task.entity';

export const TaskSchema = new EntitySchema<TaskEntity>({
    name: 'Tasks',
    target: TaskEntity,
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true
        },
        name: {
            type: String,
        },
        description: {
            type: String,
        },
        commentary: {
            type: String,
        },
        createdAt: {
            type: Date,
        },
        updtedAt: {
            type: Date,
        }
    }
})