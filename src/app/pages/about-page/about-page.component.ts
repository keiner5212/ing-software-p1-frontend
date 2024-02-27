import { Component } from '@angular/core';
import { AboutComponent } from '../../components/about/about.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [AboutComponent, HeaderComponent, FooterComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent {

}
