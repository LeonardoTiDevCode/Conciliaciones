import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Conciliation } from '../models/conciliation';

@Injectable({
  providedIn: 'root'
})
export class ConciliationService {

  endPoint = 'https://mocki.io/v1/6b008da0-a951-474d-a102-8be2c5a21974';
  constructor(private http: HttpClient) { }

  getConciliations() {
    // this.http.get<Array<Conciliation>>(this.endPoint);
    return this.http.get<Conciliation[]>(this.endPoint);
  }
}
