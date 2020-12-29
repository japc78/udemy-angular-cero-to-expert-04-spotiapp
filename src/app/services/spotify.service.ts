import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  constructor(private http: HttpClient) { }

  getNewReleases(): any {
    const headers = new HttpHeaders ({
      Authorization: 'Bearer BQAvGOAzkXyijZVPkYGWoZ-YNESEy6d82i_kmLtww67-emZLQPhDGfLcKkgkLpOUPYHGbQY6bSkJ-ZIPJhQ'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });
  }

  getArtist(termino: string): any {
    const headers = new HttpHeaders ({
      Authorization: 'Bearer BQAvGOAzkXyijZVPkYGWoZ-YNESEy6d82i_kmLtww67-emZLQPhDGfLcKkgkLpOUPYHGbQY6bSkJ-ZIPJhQ'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers });
  }
}
