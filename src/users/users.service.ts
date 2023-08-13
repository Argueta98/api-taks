import { Injectable } from '@nestjs/common';
import { Iusers } from './users.interface';
import { UsersDTO } from './dto/users.dto';
import {v4 as uuidv4} from 'uuid';

@Injectable()
export class UsersService {
    users: Iusers[] = []
    create(usersDTO: UsersDTO):Iusers{
        const user = {
            id: uuidv4(),
            ...usersDTO,
        };
        this.users.push(user);
        return user;
    }

    findAll(): Iusers[]{
        return this.users;
    }

    findOne(id:string):Iusers{
        return this.users.find((u)=>u.id === id);
    } 

    update(id: string, usersDTO:UsersDTO): Iusers{
        const newUser = {id,  ...usersDTO};
        this.users = this.users.map((u) => (u.id === id?newUser : u));
        return newUser;
    }

    delete(id:string) :string{
        this.users = this.users.filter((u) => u.id !== id);
        return 'Task Deleted'
    }
}

