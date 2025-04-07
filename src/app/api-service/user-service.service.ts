import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }
 
   //base_url = 'http://localhost:8080/user/'; // for local access

   base_url = 'http://user-service:8080/user/'; // docker access

  public getAllProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.base_url+'retrieve-all');
  }
}
