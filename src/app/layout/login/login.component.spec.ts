import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule]
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
    const accountForm = component.validateForm.get('account');
    const passwordForm = component.validateForm.get('password');
    accountForm.setValue('account');
    passwordForm.setValue('password');
    component.submitForm();
  });
});
