import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  // What if the API url changes? We only need to change it in one place
  apiUrl: string = 'https://api.thechapel.green';
  constructor(private http: HttpClient) { }
  // Returning whatever is at api.thechapel.green/cafe-menus
  getMenuItems(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/cafe-menus`)
  }
}
