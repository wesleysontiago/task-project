import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common'
import { Request, Response } from '@nestjs/common'
import { createTask, updateTask } from './task.dto'
import { TaskEntity } from './task.entity'
import { TaskService } from './task.service'

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
    async update(@Param() id: number, @Body() task: updateTask, @Res() res: Response) {
        return this.taskService.update(id, task)
    }

    @Delete(':id')
    async delete(@Param() id: number, @Res() res: Response): Promise<any> {
        return this.taskService.remove(id)
    }
}
