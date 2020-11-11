import { Injectable } from '@angular/core';
import { Base64 } from 'js-base64';
import Auth from '../entity/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth: Auth;

  constructor() {
  }

  /**
   * 设置 token
   * @param token 登录后token
   */
  setToken(token: string): void {

    const tokenFields = token.split('.');
    const payload = tokenFields[1];
    const load = Base64.decode(payload);
    localStorage.setItem('token', token);
    localStorage.setItem('user', load);
  }

  getToken(): string {
    const token = localStorage.getItem('token');
    return token;
  }

  getUser(): Auth {
    const userJson = localStorage.getItem('user');
    this.auth = JSON.parse(userJson);
    return this.auth;
  }

}
