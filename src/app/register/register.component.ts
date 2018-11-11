import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { first } from 'rxjs/operators' 

import { AlertService } from 'src/app/_services/alert.service';
import { AuthService } from 'src/app/_services/auth.service'; 
import { UsersService } from 'src/app/_services/users.service'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  messageForm: FormGroup;
  submitted = false;
  success = false;

  constructor(
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private authService: AuthService,
    private usersService: UsersService
    ){
    this.messageForm= this.formBuilder.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      username:['',Validators.required],
      password:['',Validators.required]
    })
   }

   onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
      this.alertService.error('You must fill in all fields correctly', false);
      return;
    }
    this.alertService.success('You have registered',true);
    this.success= true;
   }
   
  ngOnInit() {
  }

}
