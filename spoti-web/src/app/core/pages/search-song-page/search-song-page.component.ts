import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../components/search-box/search-box.component';
import { CardComponent } from '../../../shared/components/card/card.component';
import { Item } from '../../interfaces/track.interface';
import { CoreService } from '../../services/core.service';

@Component({
  selector: 'app-search-song-page',
  standalone: true,
  templateUrl: './search-song-page.component.html',
  styles: ``,
  imports: [SearchBoxComponent, CardComponent],
})
export class SearchSongPageComponent {
  public songs: Item[] = [];

  constructor(private coreService: CoreService) {}

  searchSongs(name: string) {
    this.coreService.getSongs(name).subscribe((data) => {
      console.log(data.tracks.items)
      this.songs = data.tracks.items;
    });
  }
}
