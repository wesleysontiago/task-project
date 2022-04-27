import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { TaskController } from './task/controllers/task.controller'
import { AppService } from './app.service'
import { TaskService } from './task/service/task.service'
import { TaskModule } from './task/task.module'
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from './task/entity/task.entity'

@Module({
  imports: [
    TaskModule,
    TypeOrmModule.forFeature([TaskEntity]),
    TypeOrmModule.forRoot({
      type :"sqlite",
      database: "tasks.sqlite",
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: true
    }),
  ],
  controllers: [AppController, TaskController],
  providers: [AppService, TaskService],
})
export class AppModule {}