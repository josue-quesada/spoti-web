import { Routes } from '@angular/router';
import { HomePageComponent } from './core/pages/home-page/home-page.component';
import { SearchArtistPageComponent } from './core/pages/search-artist-page/search-artist-page.component';
import { SearchSongPageComponent } from './core/pages/search-song-page/search-song-page.component';
import { ArtistPageComponent } from './core/pages/artist-page/artist-page.component';
import { AlbumPageComponent } from './core/pages/album-page/album-page.component';

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
    path: 'album/:id',
    component: AlbumPageComponent
  },
  {
    path: 'artist/:id',
    component: ArtistPageComponent
  },
  {
    path: '**', redirectTo: ''
  },

];
