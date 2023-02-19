import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  register() {
    return {
      message: '123',
    };
  }
  login() {
    return {
      message: '123',
    };
  }
}
