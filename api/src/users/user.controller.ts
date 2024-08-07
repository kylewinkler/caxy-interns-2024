import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return await this.usersService.findAll();
  }

  @Get('/create')
  createUser() {
    console.log('check mic');
    return this.usersService.createUser();
  }

  @Get('/:id')
  getUser(@Param('id') id): Promise<User> {
    return this.usersService.findOne(id);
  }
}
