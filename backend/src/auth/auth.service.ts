import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {

  constructor(
    private usersService: UserService,
    private jwtService: JwtService
  ) { }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByCond({
      email,
      password
    });
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  generateJwtToken(data: { id: number, email: string }) {
    const payload = { email: data.email, sub: data.id };
    return this.jwtService.sign(payload)
  }

  async register(dto: CreateUserDto) {
    try {
      const { password, ...userData } = await this.usersService.create({
        email: dto.email,
        fullName: dto.fullName,
        password: dto.password
      })
      
      return {
        ...userData,
        token: this.generateJwtToken(userData)
      };
    } catch (error) {
      throw new ForbiddenException('Ошибка при регистрации')
    }
  }

  async login(user: User) {
    const { password, ...userData } = user
    const payload = { email: user.email, sub: user.id };
    return {
      ...userData,
      token: this.generateJwtToken(userData)
    };
  }
}