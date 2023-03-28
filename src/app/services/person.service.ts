import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Person } from 'src/app/interfaces/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  attributes: string[] = [];
  baseUrl: string = 'https://localhost:7266/api/person';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Person[]> {
    return this.http.get<Person[]>(this.baseUrl);
    }

  getById(id:number): Observable<Person> {
    return this.http.get<Person>(`${this.baseUrl}/${id}`);
  }
}
