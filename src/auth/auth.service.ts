import { Injectable} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { LoginDto } from './login.dto';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}


  async login(loginDto: LoginDto) {
    const { email, senha } = loginDto;
    const user = await this.userService.findByEmail(email);

    if (!user) {
        throw new Error('User not found');
    }
    if (user.senha == senha) {
      return { message: 'Login successful', user };
    }else{
      throw new Error('Invalid password');
    }
  
  }
}
