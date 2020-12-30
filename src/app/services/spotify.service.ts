
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  constructor(private http: HttpClient) { }

  getQuery(query: string): any {
    const TOKEN = 'BQAnChk9qKSLHveWNDJu6sw2WGIX_R53iYck-2L4dK_q3AX7kokxeINrmjgoa84AD-Vw0ZlcDQQKd7GZJW4';
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders ({ Authorization: `Bearer ${TOKEN}` });
    return this.http.get(url, { headers });
  }

  getNewReleases(): any {
    return this.getQuery(`browse/new-releases?limit=20`)
      .pipe(map((data: any) => data.albums.items));
  }

  getArtist(termino: string): any {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map((data: any) => data.artists.items));
  }
}
