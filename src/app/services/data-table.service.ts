import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTableService {

  //resource: string = 'person';
  baseUrl: string = 'https://localhost:7266/api';
  constructor(private http: HttpClient) { }

  getAll<Type>(resource: string): Observable<Type[]> {
    return this.http.get<Type[]>(`${this.baseUrl}/${resource}`);
  }

  getById<Type>(resource: string, id:number): Observable<Type> {
    return this.http.get<Type>(`${this.baseUrl}/${resource}/${id}`);
  }

  getByStudentId<Type>(resource: string, id:number): Observable<Type> {
    return this.http.get<Type>(`${this.baseUrl}/${resource}/student/${id}`);
  }
}
