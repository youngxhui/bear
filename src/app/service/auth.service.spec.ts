import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import Auth from '../entity/auth';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import Result from '../entity/result';

describe('AuthService', () => {
  let service: AuthService;

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpClient = TestBed.inject(HttpClient);
    service = TestBed.inject(AuthService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be set and get Token', () => {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ5b3VuZ3hodWlAZ21haWwuY29tIiwiaWQiOjEsImV4cCI6MTYwNTIzMjA0MSwiYWNjb3VudCI6InlvdW5ne' +
      'Gh1aUBnbWFpbC5jb20iLCJhdXRob3JpdGllcyI6W3siaWQiOjEsImF1dGhvcml0eSI6IlJPTEVfVVNFUiJ9LHsiaWQiOjIsImF1dGhvcml0eSI6IlJPTEVfQURNSU4ifV0' +
      'sInVzZXJuYW1lIjoi5byg5LiJIn0.WtEQn9ITzqNTT9ZPT4XhJ5fZnO-vlOmnZBNcwbtwGzU';
    service.setToken(token);
    const t = service.getToken();
    expect(t).toEqual(token);
  });

  it('should get auth', () => {
    const user = service.getUser();
    expect(user.id).toEqual(1);
    expect(user.account).toEqual('youngxhui@gmail.com');
  });

  it('should login', () => {
    const result: Result<string> = new Result<string>();
    result.data = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ5b3VuZ3hodWlAZ21haWwuY29tIiwiaWQiOjEsImV4cCI6MTYwNTIzMjA0MSwiYWNjb3VudCI6InlvdW5ne' +
      'Gh1aUBnbWFpbC5jb20iLCJhdXRob3JpdGllcyI6W3siaWQiOjEsImF1dGhvcml0eSI6IlJPTEVfVVNFUiJ9LHsiaWQiOjIsImF1dGhvcml0eSI6IlJPTEVfQURNSU4ifV0' +
      'sInVzZXJuYW1lIjoi5byg5LiJIn0.WtEQn9ITzqNTT9ZPT4XhJ5fZnO-vlOmnZBNcwbtwGzU';

    const account = 'test@test.com';
    const password = '123456';
    service.login(account, password).subscribe(data =>
      expect(data).toEqual(result));
  });
});
