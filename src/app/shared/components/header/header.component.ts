import { Component } from '@angular/core';
import { Router } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router){}

  navigateAdminPage(){
    this.router.navifate(['admin']).then();
  }

}
