import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { PaginationParams } from '../../type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private apiService: ApiService) { }

  getProducts = (url: string, params: PaginationParams): Observable<any> => {
    return this.apiService.get(url, {
      params,
      responseType: 'json',
    });
  }
}
