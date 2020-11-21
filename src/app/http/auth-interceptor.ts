import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {NzMessageService} from 'ng-zorro-antd/message';
import {Router} from '@angular/router';

/**
 * 权限拦截
 */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private messageService: NzMessageService, private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(error => {
        if (error.status === 401) {
          this.messageService.error('您的登录信息已经过期，请重新登录');
          this.router.parseUrl('/login');
          return;
        }
        if (error.status === 403) {
          this.router.parseUrl('/403');
          return;
        }
        return throwError(error);
      })
    );
  }

}
