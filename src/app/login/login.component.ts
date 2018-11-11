import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import { AlertService } from 'src/app/_services/alert.service'; 
import { AuthService } from 'src/app/_services/auth.service'; 

declare var routerLink: any
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  messageForm: FormGroup;
  submitted = false;
  success = false;

  constructor(
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private authService: AuthService
    ) {
    this.messageForm= this.formBuilder.group({
      name:['',Validators.required],
      password:['',Validators.required]
    })
   }
  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
      this.alertService.error('Username or Password is incorrect',false);
      return;
    }

    this.alertService.success('You are logged in',true);
    this.success= true;
    
   }
  ngOnInit() {
  }

}
