import { Component } from '@angular/core';
import { CoreService } from '../../../core/services/core.service';
import { HttpClientModule } from '@angular/common/http';
import { ArtistsResponse } from '../../../core/interfaces/artist.interface';
import { AlbumReleases } from '../../../core/interfaces/releases.interface';
import { TracksResult } from '../../../core/interfaces/track.interface';
import { TopTracksResult } from '../../../core/interfaces/topTracks.interface';

@Component({
  selector: 'shared-card',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './card.component.html',
  styles: ``
})
export class CardComponent {

  public artists?: ArtistsResponse;

  constructor(private coreService: CoreService){

  }

  getArtist(name: string){
    //this.coreService.getArtistAlbums('metallica');
    console.log(this.coreService.getArtistTops('2ye2Wgw4gimLv2eAKyk1NB').subscribe((data: TopTracksResult) => {
      console.log(data)
    }));
  //   this.coreService.getArtistId('metallica').subscribe((data: ArtistsResponse) => {
  //     console.log(data)
  //     this.artists = data
  //     console.log(this.artists.artists.items[0].id)
  //   })
  }

}
