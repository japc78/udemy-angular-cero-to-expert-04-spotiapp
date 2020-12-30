import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})

export class HomeComponent implements OnInit {

  newSongs: any[] = [];
  loading: boolean;
  error: boolean;
  msgError: string;

  constructor(private spotifyService: SpotifyService) {
    this.error = false;
    this.loading = true;

    this.spotifyService.getNewReleases()
      .subscribe( (data: any) => {
        this.newSongs = data;
        this.loading = false;
      }, (error: any ) => {
        // console.log(error);
        this.loading = false;
        this.error = true;
        this.msgError = error.error.error.message;
      });
  }

  ngOnInit(): void {
  }

}
