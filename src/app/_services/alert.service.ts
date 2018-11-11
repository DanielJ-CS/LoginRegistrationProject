import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private currentSubject = new Subject<any>();
  private keepAfterChange = false;

  constructor(private router: Router) {
      router.events.subscribe(event => {
          if (event instanceof NavigationStart) {
              if (this.keepAfterChange) {
                  this.keepAfterChange = false;
              } else {
                  this.currentSubject.next();
              }
          }
      });
  }

  success(message: string, keepAfterChange = false) {
      this.keepAfterChange = keepAfterChange;
      this.currentSubject.next({ type: 'success', text: message });
  }

  error(message: string, keepAfterChange = false) {
      this.keepAfterChange = keepAfterChange;
      this.currentSubject.next({ type: 'error', text: message });
  }

  getMessage(): Observable<any> {
      return this.currentSubject.asObservable();
  }
}