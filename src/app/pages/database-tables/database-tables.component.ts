import { Component } from "@angular/core";
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { CommonModule } from "@angular/common";
import { LoaderComponent } from "../../components/loader/loader.component";


@Component({
	selector: "app-database-tables",
	standalone: true,
	imports: [HeaderComponent, FooterComponent, CommonModule, LoaderComponent],
	templateUrl: "./database-tables.component.html",
	styleUrl: "./database-tables.component.css",
})
export class DatabaseTablesComponent {
}
