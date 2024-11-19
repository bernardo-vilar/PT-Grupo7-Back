import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import axios from 'axios';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async Create(@Body() userData: CreateUserDto){
    return userData;
  }
}






