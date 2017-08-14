import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from "../login.service";

interface User {
  user: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(formBuilder: FormBuilder,
              public loginSvc: LoginService) {
    this.loginForm = formBuilder.group({
      user: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {

  }

  onSubmit({value, valid}: { value: User, valid: boolean }) {
    this.loginSvc.login(value).subscribe(
      data => alert(data),
      error => alert(error)
    );
  }

}
