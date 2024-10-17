import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowseComponent } from './pages/browse/browse.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'browse',
    component: BrowseComponent,
  },
];
