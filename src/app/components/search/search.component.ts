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
    if (termino) {
      this.loading = true;
      // console.log(termino);
      this.spotifyService.getArtists(termino)
        .subscribe( (data: any) => {
          // console.log(data);
          this.artists = data;
          this.loading = false;
        });
    } else {
      this.loading = false;
      this.artists = [];
    }
  }
}
