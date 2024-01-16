import { Routes } from '@angular/router';
import { HomePageComponent } from './core/pages/home-page/home-page.component';
import { SearchArtistPageComponent } from './core/pages/search-artist-page/search-artist-page.component';
import { SearchSongPageComponent } from './core/pages/search-song-page/search-song-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'by-song',
    component: SearchSongPageComponent
  },
  {
    path: 'by-artist',
    component: SearchArtistPageComponent
  },
  {
    path: '**', redirectTo: ''
  },

];
