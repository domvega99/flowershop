import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Options, Product } from '../../type';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private httpClient: HttpClient) { }

  baseUrl: string = 'https://florify.online/'

  get<T>(url: string, options: Options): Observable<T> {
    return this.httpClient.get<T>(this.baseUrl + url, options) as Observable<T>;
  }

  post<T>(url: string, body: Product, options: Options): Observable<T> {
    return this.httpClient.post<T>(this.baseUrl + url, body, options) as Observable<T>;
  }
  
}
