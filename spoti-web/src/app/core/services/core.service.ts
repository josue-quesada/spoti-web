import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, switchMap } from 'rxjs';
import { SpotiToken } from '../interfaces/spotify.interface';
import { ArtistsResponse } from '../interfaces/artist.interface';
import { AlbumResponse } from '../interfaces/album.interface';
import { AlbumReleases } from '../interfaces/releases.interface';
import { TracksResult } from '../interfaces/track.interface';
import { TopTracksResult } from '../interfaces/topTracks.interface';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  private clientId: string = 'b0ccf348577d4feaab3c786a86f3248b';
  private clientSecret: string = '39ea6a9ef1f14f0790201053ada1184f';
  tokenUrl: string = 'https://accounts.spotify.com/api/token';
  private url: string = 'https://api.spotify.com/v1';
  idAndSecret: string = btoa(this.clientId + ':' + this.clientSecret);
  private token: string =
    'BQCdIbFZXLvoxPUncfV9sxbO84iUytflcUT5I6A5Q9n-TUnjwy-R7NntkV327SBuitBf2Njm53IjRqn_ZLqDjq3tPUOpZctsJIWc9VVnE0vIe57e-Vg';

  constructor(private http: HttpClient) {}

  body = 'grant_type=client_credentials';

  options = {
    headers: new HttpHeaders({
      Authorization: 'Basic '.concat(this.idAndSecret),
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  };

  options2 = {
    headers: new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    }),
  };

  getAccessToken(): string {
    const url = this.tokenUrl;
    this.http
      .post<SpotiToken>(url, this.body, this.options)
      .pipe(
        map((response) => response.access_token),
        catchError(() => of(''))
      )
      .subscribe((token) => {
        this.token = token;
      });

    return this.token;
  }

  getReleases() {
    const url = `${this.url}/browse/new-releases`;
    return this.http.get<AlbumReleases>(url, this.options2).pipe(
      map((data) => {
        console.log(data);
        return data;
      })
    );
  }

  getSongs(id: string) {
    const url = `${this.url}/search?q=${id}&type=track`;
    return this.http.get<TracksResult>(url, this.options2).pipe(
      map((data) => {
        console.log(data);
        return data;
      })
    );
  }

  getArtistId(name: string) {
    const url = `${this.url}/search?q=${name}&type=artist`;
    return this.http.get<any>(url, this.options2).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  getArtistTops(id: string) {
    const url = `${this.url}/artists/${id}/top-tracks?market=US`;
    return this.http.get<TopTracksResult>(url, this.options2).pipe(
      map((data) => {
        console.log(data);
        return data;
      })
    );
  }

  /*Todo cambiarlo para que tenga un formato similar al de los demas y que
  cuando haga la busqueda se subcriba y obtenga el id, y hace el resto
  */
  getArtistAlbums(name: string) {
    this.getArtistId(name).subscribe((data: ArtistsResponse) => {
      const id = data.artists.items[0]?.id;
      if (id) {
        console.log(id);
        const url = `${this.url}/artists/${id}/albums`;
        return this.http.get<any>(url, this.options2).pipe(
          map((data: AlbumResponse) => {
            console.log(data);
            return data;
          })
        );
      } else {
        console.log('Artist ID not found.');
        return;
      }
    });

    // this.getArtistId(name).subscribe((data: ArtistsResponse) => {
    //   const id = data.artists.items[0]?.id;
    //   if (id) {

    //   } else {
    //     console.log('Artist ID not found.');
    //   }
    // });
  }
}
