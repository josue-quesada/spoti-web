import { Component } from '@angular/core';
import { SearchBoxComponent } from "../../components/search-box/search-box.component";
import { Item } from '../../interfaces/albums.interface';
import { CoreService } from '../../services/core.service';
import { CardComponent } from "../../../shared/components/card/card.component";

@Component({
    selector: 'app-search-artist-page',
    standalone: true,
    templateUrl: './search-artist-page.component.html',
    styles: ``,
    imports: [SearchBoxComponent, CardComponent]
})
export class SearchArtistPageComponent {

  public albums: Item[] = [];
  public artistId: string = '';

  constructor(private coreService: CoreService){}

  searchArtistId(name:string){
    this.coreService.getArtistId(name).subscribe((data) => {
      this.artistId = data.artists.items[0].id;
    });
    if(this.artistId != ''){
      this.searchAlbums(this.artistId)
    }
  }

  searchAlbums(id:string){
    this.coreService.getArtistAlbums(id).subscribe((data) => {
      this.albums = data.items;
    });
  }

  ngOnInit(){

  }

}
