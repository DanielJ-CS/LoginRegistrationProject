import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { user } from 'src/app/_models/user';

declare var config: any;
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<user>;
  private currentUser: Observable<user>;

  constructor(private httpClient: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<user>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
   }

   public get currentUserValue(): user {
     return this.currentUserSubject.value;
   }

   login(username: string, password: string) {
    return this.httpClient.post<any>(`${config.apiUrl}/users/authenticate`, { username, password })
        .pipe(map(user => {
            if (user && user.token) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
            }
            return user;
        }));
  }

logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
