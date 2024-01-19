import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { SpotiToken } from '../interfaces/spotify.interface';
import { Artist } from '../interfaces/artist.interface';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  private clientId: string = "b0ccf348577d4feaab3c786a86f3248b";
  private clientSecret: string = "39ea6a9ef1f14f0790201053ada1184f";
  tokenUrl: string = "https://accounts.spotify.com/api/token";
  private url: string = "https://api.spotify.com/v1/";
  idAndSecret: string = btoa(this.clientId + ":" + this.clientSecret);
  private token: string = "";

  body = "grant_type=client_credentials";

  options = {
    headers: new HttpHeaders({
      Authorization: "Basic ".concat(this.idAndSecret),
      "Content-Type": "application/x-www-form-urlencoded",
    }),
  };

  constructor(private http: HttpClient) { }

  getAccessToken(): string {
    const url = this.tokenUrl;
    this.http
      .post<SpotiToken>(url, this.body, this.options)
      .pipe(
        map((response) => response.access_token),
        catchError(() => of(""))
      )
      .subscribe((token) => {
        this.token = token;
      });

    return this.token;
  }

  getArtistId(name: string) {
    const url = `${this.url}?q=${name}&type=artist`
    this.http.get<Artist[]>(url).subscribe(resp => {
      console.log(resp)
    });
  }

}
