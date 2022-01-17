import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UIforChruchCRM';
  constructor(private router: Router) { }
  homepage() {
    this.router.navigateByUrl('/home');
  }
  
}
