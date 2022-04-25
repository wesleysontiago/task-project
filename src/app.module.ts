import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { TaskController } from './task/task.controller'
import { AppService } from './app.service'
import { TaskService } from './task/task.service'
import { TaskModule } from './task/task.module'
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from './task/task.entity'

@Module({
  imports: [
    TaskModule,
    TypeOrmModule.forFeature([TaskEntity]),
    TypeOrmModule.forRoot({
      type :"sqlite",
      database: "task_project",
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: true
    }),
  ],
  controllers: [AppController, TaskController],
  providers: [AppService, TaskService],
})
export class AppModule {}