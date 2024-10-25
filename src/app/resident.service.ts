import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resident } from './Resident';

@Injectable({
  providedIn: 'root'
})
export class ResidentService {
  private apiUrl = `https://localhost:7134/api/Iedz`

  constructor(private http: HttpClient) { }
  
  getResidents(): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl);
  }
  getResident(id: number): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  updateResident(Resident: Resident): Observable<any> {
    return this.http.put(`${this.apiUrl}/${Resident.persKods}`, Resident);
  }
  createResident(Resident: Resident): Observable<any> {
    return this.http.post(this.apiUrl, Resident);
  }
  deleteResident(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  getResidentsFromApart(id: number): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/${id}/Iedzivotaji`);
  }

}
