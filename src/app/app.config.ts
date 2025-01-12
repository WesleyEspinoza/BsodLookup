import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig, SecurityContext, provideZoneChangeDetection } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { CLIPBOARD_OPTIONS, MERMAID_OPTIONS, provideMarkdown } from 'ngx-markdown';


export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(withFetch()), provideMarkdown({
    loader: HttpClient,
    clipboardOptions: {
      provide: CLIPBOARD_OPTIONS,
      useValue: {},
    },
    markedExtensions: [],
    mermaidOptions: {
      provide: MERMAID_OPTIONS,
      useValue: {
        darkMode: true,
        look: 'handDrawn',
      },
    },
    sanitize: SecurityContext.NONE,
  }), provideAnimations(), provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()), provideAnimationsAsync(), provideMarkdown()]
};
