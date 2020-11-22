import { Injectable } from '@angular/core';
import { Base64 } from 'js-base64';
import Auth from '../entity/auth';
import { HttpClient } from '@angular/common/http';
import Result from '../entity/result';
import { Token } from '../entity/token';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private auth: Auth;

    constructor(private httpClient: HttpClient) {
    }

    login(account: string, password: string): Observable<Result<string>> {
        return this.httpClient.post<Result<string>>('/user/login', {account, password});
    }

    /**
     * 设置 token
     * @param token 登录后token
     */
    setToken(token: string): void {
        console.log(`token => ${token}`);
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

    /**
     * 清除 localstorage 信息，包含 user 和 token
     */
    clear(): void {
        localStorage.clear();
    }

}
