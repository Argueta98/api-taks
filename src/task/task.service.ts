import { Injectable } from '@nestjs/common';
import { TaskDTO } from './dto/task.dto';
import { Itask } from './task.interface';
import {v4 as uuidv4} from 'uuid';

@Injectable()
export class TaskService {
    tasks: Itask[] = [];
    create(taskDTO: TaskDTO):Itask{
        const task = {
            id: uuidv4(),
            ...taskDTO,
        };
        this.tasks.push(task);
        return task;
    }

    findAll(): Itask[]{
        return this.tasks;
    }

    findOne(id: string) : Itask{
        return this.tasks.find((t)=>t.id === id);
    }

    update(id: string, taskDTO:TaskDTO): Itask{
        const newTask = {id,  ...taskDTO};
        this.tasks = this.tasks.map((t) => (t.id === id?newTask : t));
        return newTask;
    }

    delete(id:string) :string{
        this.tasks = this.tasks.filter((t) => t.id !== id);
        return 'Task Deleted'
    }
}
