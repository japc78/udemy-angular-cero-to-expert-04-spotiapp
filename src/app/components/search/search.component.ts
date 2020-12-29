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

  constructor( private spotifyService: SpotifyService ) { }

  search(termino: string): any {
    // console.log(termino);
    this.spotifyService.getArtist(termino)
      .subscribe( (data: any) => {
        // console.log(data.artists);
        this.artists = data.artists.items;
      });
  }
}
