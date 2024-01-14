import { Component } from '@angular/core';
import { SearchBoxComponent } from "../../components/search-box/search-box.component";

@Component({
    selector: 'app-search-page',
    standalone: true,
    templateUrl: './search-page.component.html',
    styles: ``,
    imports: [SearchBoxComponent]
})
export class SearchPageComponent {

}
