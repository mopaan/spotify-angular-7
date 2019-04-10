import { Component, Output, EventEmitter } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { Artist } from '../model/Artists';
import { Subject } from 'rxjs';


@Component({

  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SpotifyService]
})



export class SearchComponent {
  searchStr: string;
  id: string;
  artists: Artist[];
  resultSearch = null;
  searchKeyupStream$ = new Subject();
  @Output() emitSearchKey = new EventEmitter();

  constructor(private SpotifyService: SpotifyService) { }


  searchMusic() {
    this.SpotifyService.searchMusic(this.searchStr)
      .subscribe((response: any) => {
        console.log(response);
        this.resultSearch = response.artists.items;
        console.log(this.resultSearch, "DATA GAINED");
      },
        err => {
          console.log(err);
        },
        () =>
          console.log("completed"));
  }
}



