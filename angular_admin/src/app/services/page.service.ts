import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  private apiUrl = 'http://localhost:3000/pages/image'; // Your API URL here

  constructor(private http: HttpClient) { }

  addImg(imgData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, imgData);
  }
}
