import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SigninService {
  http = inject(HttpClient)
  login(email: string, password: string) {
    return this.http.post<{ token: string }>('http://localhost:5050/api/user/login', {
      Email: email,
      Password: password
    });
  }

  private token: string | null = null;

  setToken(token: string) {
    this.token = token;
  }

  getToken() {
    return this.token;
  }

  clearToken() {
    this.token = null;
  }
}
