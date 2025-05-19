import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

const firebaseConfig = {
  apiKey: "AIzaSyA3rJIvAu0GK3BTHBwxxuho6u97cvaE2bc",
  authDomain: "angular-firebase-auth-ud-78a81.firebaseapp.com",
  projectId: "angular-firebase-auth-ud-78a81",
  storageBucket: "angular-firebase-auth-ud-78a81.firebasestorage.app",
  messagingSenderId: "1049255408577",
  appId: "1:1049255408577:web:3c64e4b31aa5cf6c65f540"
};

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimationsAsync()]
};
