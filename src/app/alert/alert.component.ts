import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AlertService } from 'src/app/_services/alert.service';
import { Alert } from 'selenium-webdriver';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  private subscription: Subscription;
  message: any;
  constructor(private alertServices: AlertService) {}

  ngOnInit() {
    this.subscription = this.alertServices.getMessage().subscribe(message=>{
      this.message = message;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
