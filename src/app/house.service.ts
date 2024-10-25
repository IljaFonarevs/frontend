import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { House } from './House';
@Injectable({
  providedIn: 'root'
})
export class HouseService {

  private apiUrl = 'https://localhost:7134/api/Majas'

  constructor(private http: HttpClient) { }

  getHouses(): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl);
  }
  getHouse(id: number): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  updateHouse(house: House): Observable<any> {
    return this.http.put(`${this.apiUrl}/${house.majaNumurs}`, house);
  }
  createHouse(house: House): Observable<any> {
    return this.http.post(this.apiUrl, house);
  }
  deleteHouse(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  
}
