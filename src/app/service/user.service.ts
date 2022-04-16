import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(): Observable<any> {
    return this.http.get<any[]>(`${environment.apiHome}/users`);
    
  }
  login(user:any): Observable<any> {
    return this.http.get<any[]>(`${environment.apiHome}/users?username=${user.email}&password=${user.password}`);
    
  } 

  getUserLit(): Observable<any> {
    return this.http.get<any[]>(`${environment.apiHome}/phonebook`);    
  }

  editContact(contact: any): Observable<any> {
    return this.http.put<any>(`${environment.apiHome}/phonebook/${contact.id}`, contact);
  }
  
  deleteContact(id: string): Observable<any> {
    return this.http.delete(`${environment.apiHome}/phonebook/${id}`);
  }
}
