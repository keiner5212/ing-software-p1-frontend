import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { TeamComponent } from '../../components/team/team.component';

@Component({
  selector: 'app-team-page',
  standalone: true,
  imports: [TeamComponent, HeaderComponent, FooterComponent],
  templateUrl: './team-page.component.html',
  styleUrl: './team-page.component.css'
})
export class TeamPageComponent {

}
