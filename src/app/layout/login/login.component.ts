import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  validateForm!: FormGroup;

  submitForm(): void {
    // tslint:disable-next-line:forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    const account = this.validateForm.get('account').value;
    const password = this.validateForm.get('password').value;
    // console.log(account);
    this.authService.login(account, password).subscribe(
      result => {
        this.authService.setToken(result.data);
        this.router.navigate(['/']);
      },
    )
    ;
  }

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      account: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

}
