import { Routes } from '@angular/router';
import { HomePageComponent } from './core/pages/home-page/home-page.component';
import { SearchPageComponent } from './core/pages/search-page/search-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'search',
    component: SearchPageComponent
  },
  {
    path: '**', redirectTo: ''
  },

];
