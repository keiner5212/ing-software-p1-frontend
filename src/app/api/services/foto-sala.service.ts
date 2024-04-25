import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FotoSala } from '../entities/FotoSala';
import { environment } from '../../../../enviroments';

@Injectable({
  providedIn: 'root'
})
export class FotoSalaService {
	private apiUrl = `${environment.API_BASE_URL}/fotos_salas`;
	private http: HttpClient;

	constructor(http: HttpClient) {
		this.http = http;
	}

  getAll(): Observable<FotoSala[]> {
    return this.http.get<FotoSala[]>(this.apiUrl);
  }
}
