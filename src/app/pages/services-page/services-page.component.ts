import { Component } from '@angular/core';
import { ServicesComponent } from '../../components/services/services.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [ServicesComponent, HeaderComponent, FooterComponent],
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.css'
})
export class ServicesPageComponent {

}
