import { Controller,Post, Get,Put, Delete, Body, Param, UsePipes, ValidationPipe} from '@nestjs/common';
import { Request } from 'express';
import { UsersService } from './users.service';
import { UsersDTO } from './dto/users.dto';

@Controller('api/v1/users')
export class UsersController {
    constructor(private readonly usersService:UsersService){}

    @Post()
    @UsePipes(new ValidationPipe())
    method(@Body() usersDTO:UsersDTO){
        return this.usersService.create(usersDTO);
    }
    
    @Get()
    findAll(){
        return this.usersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id')id: string){
        return this.usersService.findOne(id);
    }


    @Put(':id')
    update(@Param('id') id:string, @Body() usersDTO: UsersDTO){
        return this.usersService.update(id,usersDTO);
    }

    @Delete(':id')
    delete(@Param('id') id:string){
        return this.usersService.delete(id);
    }
}
