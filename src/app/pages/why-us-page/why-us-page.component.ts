import { Component } from '@angular/core';
import { WhyUsComponent } from '../../components/why-us/why-us.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-why-us-page',
  standalone: true,
  imports: [WhyUsComponent, HeaderComponent, FooterComponent],
  templateUrl: './why-us-page.component.html',
  styleUrl: './why-us-page.component.css'
})
export class WhyUsPageComponent {

}
