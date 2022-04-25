import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { createTask, updateTask } from './task.dto';
import { TaskEntity } from './task.entity';

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(TaskEntity)
        private taskRepository: Repository<TaskEntity>,
    ) {}

    /**. 
     * Service for return all registered tasks
     * @returns
    */
    findAll(): Promise<TaskEntity[]> {
        return this.taskRepository.find()
    }

    /**
     * Service for specific return task
     * @param id, Type: number
     * @returns 
     */
    findOne(id: number): Promise<TaskEntity> {
        return this.taskRepository.findOne(id)
    }

    /**
     * Service for task created
     * @param taskNew, Type: Object
     * @returns null
     */
    async create(taskNew: createTask): Promise<any> {
        return this.taskRepository.save(taskNew)
    }

    /**
     * Service for task updated
     * @param id, type: Number
     * @param taskUpdate 
     * @returns
     */
    update(id: number, taskUpdate: updateTask): Promise<UpdateResult> {
        return this.taskRepository.update(id, taskUpdate)
    }

    /**
     * Service for remove task
     * @param id, type: number
     */
    async remove(id: number): Promise<DeleteResult> {
        return await this.taskRepository.delete(id)
    }
}
