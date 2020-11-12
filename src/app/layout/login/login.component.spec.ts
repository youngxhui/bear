import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import Result from '../../entity/result';
import { of } from 'rxjs';
import { AuthService } from '../../service/auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  const authService = jasmine.createSpyObj('AuthService', ['login']);
  const loginResult: Result<string> = new Result<string>();
  const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ5b3VuZ3hodWlAZ21haWwuY29tIiwiaWQiOjEsImV4cCI6MTYwNTIzMjA0MSwiYWNjb3VudCI6InlvdW5ne' +
    'Gh1aUBnbWFpbC5jb20iLCJhdXRob3JpdGllcyI6W3siaWQiOjEsImF1dGhvcml0eSI6IlJPTEVfVVNFUiJ9LHsiaWQiOjIsImF1dGhvcml0eSI6IlJPTEVfQURNSU4ifV0' +
    'sInVzZXJuYW1lIjoi5byg5LiJIn0.WtEQn9ITzqNTT9ZPT4XhJ5fZnO-vlOmnZBNcwbtwGzU';
  loginResult.data = token;
  const loginSpy = authService.login.and.returnValue(of(loginResult));
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [{provider: AuthService, useValue: authService}, {provider: Router, useValue: routerSpy}]
    })
      .compileComponents();


  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form contains fields', () => {
    expect(component.validateForm.contains('account')).toBeTruthy();
    expect(component.validateForm.contains('password')).toBeTruthy();
    expect(component.validateForm.contains('remember')).toBeTruthy();
  });

  it('should input account', () => {
    const accountForm = component.validateForm.get('account');
    accountForm.setValue('');
    expect(accountForm.valid).toBeFalsy();
    accountForm.setValue('admin');
    expect(accountForm.valid).toBeTruthy();
  });

  it('should input password', () => {
    const passwordForm = component.validateForm.get('password');
    passwordForm.setValue('');
    expect(passwordForm.valid).toBeFalsy();
    passwordForm.setValue('password');
    expect(passwordForm.valid).toBeTruthy();
  });

  it('should submit', () => {
    const syp = routerSpy.navigate as jasmine.Spy;
    const accountForm = component.validateForm.get('account');
    const passwordForm = component.validateForm.get('password');
    accountForm.setValue('account');
    passwordForm.setValue('password');
    component.submitForm();
  });
});
