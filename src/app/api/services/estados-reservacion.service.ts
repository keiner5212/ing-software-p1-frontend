import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { EstadosReservacion } from "../entities/EstadosReservacion";
import { environment } from "../../../../enviroments";

@Injectable({
	providedIn: "root",
})
export class EstadosReservacionService {
	private apiUrl = `${environment.API_BASE_URL}/estados_reservacion`;
	private http: HttpClient;

	constructor(http: HttpClient) {
		this.http = http;
	}

	getAll(): Observable<EstadosReservacion[]> {
		return this.http.get<EstadosReservacion[]>(this.apiUrl);
	}
}
