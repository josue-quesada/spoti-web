import { Component } from '@angular/core';
import { SearchBoxComponent } from "../../components/search-box/search-box.component";

@Component({
    selector: 'app-search-artist-page',
    standalone: true,
    templateUrl: './search-artist-page.component.html',
    styles: ``,
    imports: [SearchBoxComponent]
})
export class SearchArtistPageComponent {

}
