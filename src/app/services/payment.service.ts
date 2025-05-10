import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private baseUrl = 'http://localhost:5087/';
  constructor(private http: HttpClient) { }

  postData(payload: any, endpoint: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/${endpoint}/`, payload, {});
  }

  getData(endpoint: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${endpoint}`, {});
  }
}
