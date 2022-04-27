import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common'
import { Request, Response } from 'express'
import { createTask, updateTask } from '../.dto'
import { TaskEntity } from '../entity/task.entity'
import { TaskService } from '../service/task.service'

@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    @Get()
    findAll(): Promise<TaskEntity[]> {
        return this.taskService.findAll()
    }

    @Get(':id')
    findOne(@Param() params): Promise<TaskEntity> {
        return this.taskService.findOne(params.id)
    }

    @Post()
    create(@Body() task: createTask): Promise<any> {
        return this.taskService.create(task)
    }

    @Put(':id')
    async update(@Param() id: number, @Body() task: updateTask, @Res() res: Response): Promise<any> {
        const getTask = await this.findOne(id)
        if (getTask) {
            task.id = getTask.id
            task.updatedAt = new Date()
            const upTask = await this.taskService.update(task)
            return res.status(HttpStatus.OK).json(upTask)
        } else {
            return res.status(HttpStatus.NOT_FOUND).send()
        }
    }

    @Delete(':id')
    async delete(@Param() id: number, @Res() res: Response): Promise<any> {
        const deleteTask = await this.taskService.remove(id)
        if (deleteTask.affected > 0)
            return res.status(HttpStatus.OK).send()
        else
            return res.status(HttpStatus.NOT_FOUND).send()
    }
}
