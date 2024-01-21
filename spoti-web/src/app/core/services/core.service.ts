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
    'BQDP74LAVwkq5Un-pWMQGCNgYYo7cW-Au6EqAxUoL9VhgtUCaePniIlb5xiLmYtd_hIcTbUmPYuzmMF_xM1V3-rywuCy2afpssgmJ5hJM6s2SgmsCtY';

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
        return data;
      })
    );
  }

  getSongs(name: string) {
    const url = `${this.url}/search?q=${name}&type=track`;
    return this.http.get<TracksResult>(url, this.options2).pipe(
      map((data) => {
        return data;
      })
    );
  }

  getArtistId(name: string) {
    const url = `${this.url}/search?q=${name}&type=artist`;
    return this.http.get<ArtistsResponse>(url, this.options2).pipe(
      map((data) => {
        return data;
      })
    );
  }

  getArtistTops(id: string) {
    const url = `${this.url}/artists/${id}/top-tracks?market=US`;
    return this.http.get<TopTracksResult>(url, this.options2).pipe(
      map((data) => {
        return data;
      })
    );
  }

  getArtistAlbums(id: string) {
    const url = `${this.url}/artists/${id}/albums`;
    return this.http.get<AlbumResponse>(url, this.options2).pipe(
      map((data: AlbumResponse) => {
        return data;
      })
    );
  }
}
