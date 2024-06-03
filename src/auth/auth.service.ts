import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { jwtConstants } from './constant';
import { JwtPayload, jwtDecode } from 'jwt-decode';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    email: string,
    password: string,
  ): Promise<{ access_token: string }> {
    const user = await this.userService.getUser(email);
    if (user?.pass != password) {
      throw new UnauthorizedException();
    }
    const payload = { id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email, birthday: user.birthday, role: user.type};

    return {
      access_token: await this.jwtService.signAsync(payload, {
        secret: jwtConstants.secret,
      }),
    };
  }

  verifyToken(t: string) {
    try {
      console.log(t);
      this.jwtService.verify(t, jwtConstants);
      console.log('Buen token');
      return true;
    } catch (err) {
      console.log('Mal token');
      return false;
    }
  }

  decodeToken(t: string) {
    const decodeT = jwtDecode<JwtPayload>(t).sub;
    const decode = jwtDecode<JwtPayload>(t)
    console.log(decodeT);
    console.log(decode);
    return decodeT;
  }
}
