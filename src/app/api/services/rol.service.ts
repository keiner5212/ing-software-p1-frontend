import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rol } from '../entities/Rol';
import { environment } from '../../../../enviroments';

@Injectable({
  providedIn: 'root'
})
export class RolService {
	private apiUrl = `${environment.API_BASE_URL}/roles`;
	private http: HttpClient;

	constructor(http: HttpClient) {
		this.http = http;
	}

  getAll(): Observable<Rol[]> {
    return this.http.get<Rol[]>(this.apiUrl);
  }
}
