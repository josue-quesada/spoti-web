import { Component } from '@angular/core';
import { CardListComponent } from "../../../shared/components/card-list/card-list.component";

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styles: ``,
    imports: [CardListComponent]
})
export class HomePageComponent {

}
