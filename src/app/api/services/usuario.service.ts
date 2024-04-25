import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../entities/Usuario';
import { environment } from '../../../../enviroments';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
	private apiUrl = `${environment.API_BASE_URL}/usuarios`;
	private http: HttpClient;

	constructor(http: HttpClient) {
		this.http = http;
	}

  getAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }
}
