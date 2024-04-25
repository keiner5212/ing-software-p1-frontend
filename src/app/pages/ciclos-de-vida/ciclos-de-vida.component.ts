import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-ciclos-de-vida',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './ciclos-de-vida.component.html',
  styleUrl: './ciclos-de-vida.component.css'
})
export class CiclosDeVidaComponent {

}
