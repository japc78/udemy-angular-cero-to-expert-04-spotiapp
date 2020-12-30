
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  constructor(private http: HttpClient) { }

  getQuery(query: string): any {
    const TOKEN = 'BQBZZD5Y-Kd1QxJxp0LqROI41YXcRX_Mh4SKExeiYdpdTY2-c1b-AHXTq-9Vddk16tW2eVaSBWanYu1jkaA';
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders ({ Authorization: `Bearer ${TOKEN}` });
    return this.http.get(url, { headers });
  }

  getNewReleases(): any {
    return this.getQuery(`browse/new-releases?limit=20`)
      .pipe(map((data: any) => data.albums.items));
  }

  getArtists(termino: string): any {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map((data: any) => data.artists.items));
  }

  getArtist(id: string): any {
    return this.getQuery(`artists/${id}`);
  }
}
