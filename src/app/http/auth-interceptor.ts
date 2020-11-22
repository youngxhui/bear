import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

/**
 * 权限拦截
 */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private messageService: NzMessageService, private router: Router, private authService: AuthService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError(error => {
                // 登录错误
                if (error.status === 401) {
                    this.messageService.error('您的登录信息已经过期，请重新登录');
                    this.authService.clear();
                    this.router.parseUrl('/login');
                    return;
                }
                // 未授权访问
                if (error.status === 403) {
                    this.router.parseUrl('/403');
                    return;
                }
                return throwError(error);
            })
        );
    }

}
