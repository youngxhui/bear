import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd/message';

/**
 * 请求拦截器，主要实现两个功能
 * 1. 拼接 baseUrl
 * 2. 如果请求遇到错误，显示错误信息
 */
@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
  baseUrl = 'http://localhost:8800';

  constructor(private messageService: NzMessageService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiReq = req.clone({url: `${this.baseUrl}${req.url}`});
    return next.handle(apiReq).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          if (event.status !== 200) {
            this.messageService.error(event.body.message);
          }
        }
      }, err => {
        if (err.status !== 200) {
          this.messageService.error(err.error.message);
        }
      })
    );
  }
}
