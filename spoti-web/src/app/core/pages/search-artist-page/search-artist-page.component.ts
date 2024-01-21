import { Component } from '@angular/core';
import { SearchBoxComponent } from "../../components/search-box/search-box.component";
import { Item } from '../../interfaces/album.interface';
import { CoreService } from '../../services/core.service';

@Component({
    selector: 'app-search-artist-page',
    standalone: true,
    templateUrl: './search-artist-page.component.html',
    styles: ``,
    imports: [SearchBoxComponent]
})
export class SearchArtistPageComponent {

  public albums: Item[] = [];
  public artistId: string = '';

  constructor(private coreService: CoreService){}

  searchArtistId(name:string){
    this.coreService.getArtistId(name).subscribe((data) => {
      this.artistId = data.artists.items[0].id;
    });
  }

  searchAlbums(id:string){
    this.coreService.getArtistAlbums(id).subscribe((data) => {
      this.albums = data.items;
    });
  }

  ngOnInit(){

  }

}
