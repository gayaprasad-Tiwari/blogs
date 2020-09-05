import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBlog } from '../models/blog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private BASE_URL = 'http://localhost:3000/';
  
  constructor(private http: HttpClient) {}
  blogList(): Observable<IBlog[]> {
    const url = `${this.BASE_URL}blogList`;
    return this.http.get<IBlog[]>(url);
  }
  blog(id): Observable<IBlog> {
    const url = `${this.BASE_URL}blogList/${id.payload}`;
    return this.http.get<IBlog>(url);
  }
  addList(payload): Observable<IBlog[]> {
    const url = `${this.BASE_URL}blogList`;
    return this.http.post<IBlog[]>(url,payload.payload);
  }
  editList(payload): Observable<IBlog[]> {
    const url = `${this.BASE_URL}blogList/${payload.payload.id}`;
    return this.http.patch<IBlog[]>(url,payload.payload);
  }
 
}
