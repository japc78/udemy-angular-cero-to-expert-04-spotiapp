import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  constructor(private http: HttpClient) { }

  getNewReleases(): any {
    const headers = new HttpHeaders ({
      Authorization: 'Bearer BQAvGOAzkXyijZVPkYGWoZ-YNESEy6d82i_kmLtww67-emZLQPhDGfLcKkgkLpOUPYHGbQY6bSkJ-ZIPJhQ'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
      .pipe( map( (data: any) => {
        return data.albums.items;
      }));
  }

  getArtist(termino: string): any {
    const headers = new HttpHeaders ({
      Authorization: 'Bearer BQAvGOAzkXyijZVPkYGWoZ-YNESEy6d82i_kmLtww67-emZLQPhDGfLcKkgkLpOUPYHGbQY6bSkJ-ZIPJhQ'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers })
      .pipe( map( (data: any) => data.artists.items ));
  }
}
