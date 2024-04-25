import { AfterViewInit, Component } from "@angular/core";
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { Reservacion } from "../../api/entities/Reservacion";
import { ReservacionService } from "../../api/services/reservacion.service";
import { ToastrService } from "ngx-toastr";
import { toastConfig } from "../../utils/constants";
import { CommonModule } from "@angular/common";
import { getReadableDate } from "../../utils/dateFormats";
import { EstadosReservacion } from "../../api/entities/EstadosReservacion";
import { FotoSala } from "../../api/entities/FotoSala";
import { Rol } from "../../api/entities/Rol";
import { Sala } from "../../api/entities/Sala";
import { Usuario } from "../../api/entities/Usuario";
import { LoaderComponent } from "../../components/loader/loader.component";
import { EstadosReservacionService } from "../../api/services/estados-reservacion.service";
import { FotoSalaService } from "../../api/services/foto-sala.service";
import { RolService } from "../../api/services/rol.service";
import { SalaService } from "../../api/services/sala.service";
import { UsuarioService } from "../../api/services/usuario.service";
import { concat } from "rxjs";

@Component({
	selector: "app-database-tables",
	standalone: true,
	imports: [HeaderComponent, FooterComponent, CommonModule, LoaderComponent],
	templateUrl: "./database-tables.component.html",
	styleUrl: "./database-tables.component.css",
})
export class DatabaseTablesComponent implements AfterViewInit {
	estadosReservacion: EstadosReservacion[] = [];
	fotosSalas: FotoSala[] = [];
	reservations: Reservacion[] = [];
	roles: Rol[] = [];
	salas: Sala[] = [];
	usuarios: Usuario[] = [];

	loaded: {
		estadosReservacion: boolean;
		reservations: boolean;
		fotosSalas: boolean;
		roles: boolean;
		salas: boolean;
		usuarios: boolean;
	};

	constructor(
		private estadosReservacionService: EstadosReservacionService,
		private reservacionService: ReservacionService,
		private fotosSalasService: FotoSalaService,
		private rolesService: RolService,
		private salasService: SalaService,
		private usuarioService: UsuarioService,
		private toastr: ToastrService
	) {
		this.loaded = {
			estadosReservacion: false,
			reservations: false,
			fotosSalas: false,
			roles: false,
			salas: false,
			usuarios: false,
		};
	}

	ngAfterViewInit() {
		this.infoMessage("Loading...", "Loading data");

		const estadosReservacion$ = this.estadosReservacionService.getAll();
		const reservations$ = this.reservacionService.getAll();
		const fotosSalas$ = this.fotosSalasService.getAll();
		const roles$ = this.rolesService.getAll();
		const salas$ = this.salasService.getAll();
		const usuarios$ = this.usuarioService.getAll();

		concat(
			estadosReservacion$,
			reservations$,
			fotosSalas$,
			roles$,
			salas$,
			usuarios$
		).subscribe(
			(response: any) => {
				if (response instanceof Array) {
					if (response.length > 0) {
						if (response[0].hasOwnProperty("id_er")) {
							this.loaded.estadosReservacion = true;
							this.estadosReservacion = response;
							this.succesMessage(
								"Finished",
								"Estados de Reservacion loaded"
							);
						} else if (
							response[0].hasOwnProperty("id_reservacion")
						) {
							this.loaded.reservations = true;
							this.reservations = response;
							this.succesMessage(
								"Finished",
								"Reservaciones loaded"
							);
						} else if (response[0].hasOwnProperty("id_foto")) {
							this.loaded.fotosSalas = true;
							this.fotosSalas = response;
							this.succesMessage(
								"Finished",
								"Fotos de Salas loaded"
							);
						} else if (response[0].hasOwnProperty("rol")) {
							this.loaded.roles = true;
							this.roles = response;
							this.succesMessage("Finished", "Roles loaded");
						} else if (response[0].hasOwnProperty("id_sala")) {
							this.loaded.salas = true;
							this.salas = response;
							this.succesMessage("Finished", "Salas loaded");
						} else if (response[0].hasOwnProperty("id_usuario")) {
							this.loaded.usuarios = true;
							this.usuarios = response;
							this.succesMessage("Finished", "Usuarios loaded");
						}
					}
				} else {
					this.errorMessage("Error", response.message);
				}
			},
			(error: any) => {
				this.errorMessage("Error", error.message);
			}
		);
		setTimeout(() => {
			this.loaded = {
				estadosReservacion: true,
				reservations: true,
				fotosSalas: true,
				roles: true,
				salas: true,
				usuarios: true,
			};
		}, 5000);
	}

	getReadableDate = getReadableDate;
	succesMessage(title: string, message: string) {
		this.toastr.success(message, title, toastConfig as any);
	}

	errorMessage(title: string, message: string) {
		this.toastr.error(message, title, toastConfig as any);
	}

	warningMessage(title: string, message: string) {
		this.toastr.warning(message, title, toastConfig as any);
	}

	infoMessage(title: string, message: string) {
		this.toastr.info(message, title, toastConfig as any);
	}
}
