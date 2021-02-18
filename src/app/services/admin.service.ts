import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservedValueOf, throwError } from 'rxjs';
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
  // Send POST request to the menu with the required information
  addMenuItem(req):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/cafe-menus`, 
    {
      "name": req.name,
      "description": req.description,
      "price": req.price
    })
  }
  // Send a PUT request to update any current item, Function requires the menu item id of the one thats being updated
  updateMenuItem(req, menuItemId):Observable<any>{
    console.log(req);
    return this.http.put<any>(`${this.apiUrl}/cafe-menus/${menuItemId}`, 
    {
      "name": req.name,
      "description": req.description,
      "price": req.price
    })
  }

  // Delete flavor, requires the flavor ID that need to be deleted
  deleteFlavor(flavorId):Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/flavors/${flavorId}`)
  }
}
