import { PreloadingStrategy, Route } from '@angular/router';
import { of } from 'rxjs';

export class MyPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, preload: () => any): any {
    return route.data && route.data['preload'] ? preload() : of(null);
  }
}
