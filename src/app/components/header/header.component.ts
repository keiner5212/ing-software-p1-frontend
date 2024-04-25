import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public location = "";
  constructor(private router: Router) { 
    this.getCurrentUrl()
  }

  getCurrentUrl() {
    this.location = this.router.url;
  }
}
