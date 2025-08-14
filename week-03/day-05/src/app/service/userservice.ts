import { Injectable } from '@angular/core';
import { Iuser } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Userservice {
  isAuthenticated() {
    throw new Error('Method not implemented.');
  }
  private user_api_url = 'http://localhost:3000/users';
  private currentUser: Iuser | null = null;
  constructor(private http: HttpClient) {}

  getUserById(id: number): Observable<Iuser> {
    const url = `${this.user_api_url}/${id}`;
    return this.http.get<Iuser>(url);
  }

  getAllUsers(): Observable<Iuser[]> {
    return this.http.get<Iuser[]>(this.user_api_url);
  }

 login(email: string, password: string) {
  return this.http.get<Iuser[]>(`${this.user_api_url}?email=${email}&password=${password}`);
}


  setLoggedInUser(user: Iuser) {
    // Implement your logic to set the logged-in user
    this.currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
  }
  getLoggedInUser(): Iuser | null {
    return (
      this.currentUser ||
      JSON.parse(localStorage.getItem('currentUser') || 'null')
    );
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean {
    //is authenticated
    return this.getLoggedInUser() !== null;
  }
}
