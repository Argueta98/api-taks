import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskController } from './task/task.controller';
import { UsersController } from './users/users.controller';
import { TaskService } from './task/task.service';
import { UsersService } from './users/users.service';
import { TaskModule } from './task/task.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TaskModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
