import { Injectable } from '@angular/core';
import { Dispense } from './dispense';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DispenseService {

  private baseURL = "http://24.60.225.110:8080/api/v1/dispense"

  constructor(private httpClient: HttpClient) { }

  getDispenseList(): Observable<Dispense[]>{
    return this.httpClient.get<Dispense[]>(`${this.baseURL}`);
  }

  getDispenseById(id: number): Observable<Dispense>{
    return this.httpClient.get<Dispense>(`${this.baseURL}/${id}`);
  }

  createDispense(dispense: Dispense): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, dispense);
  }

  updateDispense(id: number, dispense: Dispense): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, dispense);
  }

  deleteDispense(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
