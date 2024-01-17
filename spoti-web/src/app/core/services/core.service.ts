import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { SpotiToken } from '../interfaces/spotify.interface';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  private clientId: string = "b0ccf348577d4feaab3c786a86f3248b";
  private clientSecret: string = "39ea6a9ef1f14f0790201053ada1184f";
  tokenUrl: string = "https://accounts.spotify.com/api/token";
  url: string = "";
  idAndSecret: string = btoa(this.clientId + ":" + this.clientSecret);
  private token: string = "https://api.spotify.com/v1/";

  body = "grant_type=client_credentials";

  options = {
    headers: new HttpHeaders({
      Authorization: "Basic ".concat(this.idAndSecret),
      "Content-Type": "application/x-www-form-urlencoded",
    }),
  };

  constructor(private httpClient: HttpClient) { }

  getAccessToken_(): string {
    const url = this.tokenUrl;
    this.httpClient
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

  getTracks(name: string) {

  }

}
