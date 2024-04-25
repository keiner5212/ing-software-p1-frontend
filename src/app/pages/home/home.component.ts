import { Component } from '@angular/core';
import { AboutComponent } from '../../components/about/about.component';
import { TeamComponent } from '../../components/team/team.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, TeamComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  public location = "";
  constructor(private router: Router) {
    this.getCurrentUrl()
  }

  getCurrentUrl() {
    this.location = this.router.url;
  }
}
