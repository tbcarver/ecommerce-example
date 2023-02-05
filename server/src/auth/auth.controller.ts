import { Controller, Post, Body, HttpStatus, HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/user.entity';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly authService: AuthService,
  ) { }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {

    const user = await this.userRepository.findOneBy(
      { email: loginDto.email },
    );

    if (!user) {
      throw new HttpException('User not found.', HttpStatus.NOT_FOUND);
    }

    // const isValid = await this.authService.validatePassword(user.password, loginDto.password);

    // if (!isValid) {
    //   throw new HttpException('Invalid login.', HttpStatus.FORBIDDEN);
    // }

    return this.authService.createJwt(user);
  }
}
