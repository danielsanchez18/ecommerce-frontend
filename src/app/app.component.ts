import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Router, Event, NavigationEnd } from '@angular/router';
import { IStaticMethods } from 'preline/preline';

declare global {
  interface Window {
    HSStaticMethods : IStaticMethods;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce-frontend';

  constructor (private router : Router) { }

  ngOnInit () {
    this.router.events.subscribe((event : Event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          window.HSStaticMethods.autoInit();
        }, 100);
      }
    })
  }

}
