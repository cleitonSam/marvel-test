import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { routeTransitionAnimations } from './core/router-animation/route-transition-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeTransitionAnimations],
})
export class AppComponent {
  title = 'marvel';
  prepareRoute(outlet: RouterOutlet): boolean {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animationState'];
  }
}
