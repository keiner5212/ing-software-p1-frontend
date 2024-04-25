import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sala } from '../entities/Sala';
import { environment } from '../../../../enviroments';

@Injectable({
  providedIn: 'root'
})
export class SalaService {
	private apiUrl = `${environment.API_BASE_URL}/salas`;
	private http: HttpClient;

	constructor(http: HttpClient) {
		this.http = http;
	}

  getAll(): Observable<Sala[]> {
    return this.http.get<Sala[]>(this.apiUrl);
  }
}
