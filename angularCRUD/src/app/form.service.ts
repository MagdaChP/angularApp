import { Injectable } from '@angular/core';
import { Elem } from './list';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private elemsUrl = 'api/listEl';  // URL to web api

  constructor(private http: HttpClient) { }

  getElems(): Observable<Elem[]> {
    return this.http.get<Elem[]>(this.elemsUrl)
  }

  /** PUT: update the hero on the server */
  updateElem(elem: Elem): Observable<any> {
    return this.http.put(this.elemsUrl, elem, httpOptions)
  }
  /** DELETE: delete the hero from the server */
  deleteElem(elem: Elem | number): Observable<Elem> {
    const id = typeof elem === 'number' ? elem : elem.id;
    const url = `${this.elemsUrl}/${id}`;
    return this.http.delete<Elem>(url, httpOptions);
  }
  /** POST: add a new hero to the server */
  addElem(elem: Elem): Observable<Elem> {
    return this.http.post<Elem>(this.elemsUrl, elem, httpOptions);
  }
}
