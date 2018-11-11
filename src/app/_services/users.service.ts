import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { user } from 'src/app/_models/user';

declare var config: any;

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) {}

  getAllUsers() {
    return this.httpClient.get<user[]>(`${config.apiUrl}/users`);
  }
  getById(id: number) {
    return this.httpClient.get(`${config.apiUrl}/users/${id}`);
  } 

register(user: user) {
    return this.httpClient.post(`${config.apiUrl}/users/register`, user);
  }

update(user: user) {
    return this.httpClient.put(`${config.apiUrl}/users/${user.id}`, user);
  }

delete(id: number) {
    return this.httpClient.delete(`${config.apiUrl}/users/${id}`);
  }
}
