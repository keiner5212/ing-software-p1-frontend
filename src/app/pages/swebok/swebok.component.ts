import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-swebok',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './swebok.component.html',
  styleUrl: './swebok.component.css'
})
export class SwebokComponent {

}
