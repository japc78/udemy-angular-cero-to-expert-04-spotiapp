import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases(): any {
    const headers = new HttpHeaders ({
      Authorization: 'Bearer BQDs-vF1ErGy6AoALe9Ra5m7fBFveao8koH6sZLNF9ai84nmJNnT6mSFEdkpRd7TyZ_RnIbZCkQHzZZ0QrA'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });
  }
}