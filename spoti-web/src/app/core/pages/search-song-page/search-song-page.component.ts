import { Component } from '@angular/core';
import { SearchBoxComponent } from "../../components/search-box/search-box.component";

@Component({
    selector: 'app-search-song-page',
    standalone: true,
    templateUrl: './search-song-page.component.html',
    styles: ``,
    imports: [SearchBoxComponent]
})
export class SearchSongPageComponent {

}
