import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import Auth from '../entity/auth';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be set and get Token', () => {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiLlvKDkuIkiLCJpZCI6MSwiZXhwIjoxNjA1MTYzMzM0LCJhY2NvdW50Ijoi5byg5LiJIiwiYXV0aG9yaXRpZXMiOlt7ImlkIjoxLCJhdXRob3JpdHkiOiJST0xFX1VTRVIifSx7ImlkIjoyLCJhdXRob3JpdHkiOiJST0xFX0FETUlOIn1dfQ.J3IiCYvrBV9vvpSOi97zPB6rFnfE_anxkVLZ5EIAIJM';
    service.setToken(token);
    const t = service.getToken();
    expect(t).toEqual(token);
  });

  it('should get auth', () => {
    const user = service.getUser();
    console.log(user);
    expect(user).toBeInstanceOf(Auth);
    // expect(JSON.stringify(user)).toEqual()
  });

  afterAll(() => {
    localStorage.clear();
  });
});
