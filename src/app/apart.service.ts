import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Dzivoklis } from './Dzivoklis';

@Injectable({
  providedIn: 'root'
})
export class ApartService {
  private apiUrl = 'https://localhost:7134/api/Dzivoklis'

  constructor(private http: HttpClient) { }

  getAparts(): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl)
  }
  getApart(id: number): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  updateApart(id: number, apart: Dzivoklis): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, apart);
  }
  createApart(apart: Dzivoklis): Observable<any> {
    return this.http.post(this.apiUrl, apart);
  }
  deleteApart(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  getApartsFromHouse(id: number): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/${id}/apartments`);
  }
}

