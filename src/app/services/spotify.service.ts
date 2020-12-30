
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  constructor(private http: HttpClient) { }

  getQuery(query: string): any {
    const TOKEN = 'BQAo5CBVdR9pr-5ChNlGWInVdoriN0Sx3ZdvjclNp3NkxGIrfac-WLdhm6k-tQmFbtJ2pEwNNNJ-ESb69uc';
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
