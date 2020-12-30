import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  artists: any[] = [];
  loading: boolean;

  constructor( private spotifyService: SpotifyService ) { }

  search(termino: string): any {
    this.loading = true;
    // console.log(termino);
    this.spotifyService.getArtists(termino)
      .subscribe( (data: any) => {
        // console.log(data.artists);
        this.artists = data;
        this.loading = false;
      });

    if (!termino) {
        this.loading = false;
        this.artists = [];
    }
  }
}
