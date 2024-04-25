import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservacion } from '../entities/Reservacion';
import { environment } from '../../../../enviroments';

@Injectable({
  providedIn: 'root'
})
export class ReservacionService {
	private apiUrl = `${environment.API_BASE_URL}/reservaciones`;
	private http: HttpClient;

	constructor(http: HttpClient) {
		this.http = http;
	}

  getAll(): Observable<Reservacion[]> {
    return this.http.get<Reservacion[]>(this.apiUrl);
  }
}
