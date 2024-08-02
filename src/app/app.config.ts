import {
  ApplicationConfig,
  importProvidersFrom,
  isDevMode,
} from '@angular/core';
import {
  PreloadAllModules,
  provideRouter,
  withPreloading,
} from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import {
  jwtInterceptor,
  loadingScreenInterceptor,
} from './shared/interceptors/auth.interceptor';
import { SimpleNotificationsModule } from 'angular2-notifications';
// import { NgxLoadingModule } from 'ngx-loading';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { MyPreloadingStrategy } from './preloading';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { homeReducer } from './home/store/home.reducer';
import { HomeEffect } from './home/store/home.effects';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    MyPreloadingStrategy,
    provideRouter(routes, withPreloading(MyPreloadingStrategy)),
    provideAnimationsAsync(),
    provideHttpClient(
      withInterceptors([jwtInterceptor, loadingScreenInterceptor]),
      withFetch()
    ),
    provideCharts(withDefaultRegisterables()),
    importProvidersFrom(
      SimpleNotificationsModule.forRoot()
      // NgxLoadingModule.forRoot({})
    ),
    provideStore({ home: homeReducer }),
    provideEffects([HomeEffect]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideClientHydration(),
  ],
};
