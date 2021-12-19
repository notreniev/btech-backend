import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserModel } from '../domains/models/user.model';
import { UserService } from './user.service';

@Controller('api/users')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Post()
    async create(@Body() user: UserModel): Promise<UserModel>{
        return await this.userService.create(user);
    }

    @Patch('/:id')
    async update(@Body() user: UserModel): Promise<UserModel>{
        return await this.userService.update(user);
    }

    @Get()
    findAll():Promise<UserModel[]>{
        return this.userService.findAll();
    }

    @Get('/:id')
    async findById(@Param('id') id: string):Promise<UserModel[]>{
        return await this.userService.findById(id);
    }

    @Delete('/:id')
    async remove(@Param('id') userId: string){
        return await this.userService.delete(userId);
    }

}
