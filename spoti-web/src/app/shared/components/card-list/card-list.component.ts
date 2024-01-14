import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";

@Component({
    selector: 'shared-card-list',
    standalone: true,
    templateUrl: './card-list.component.html',
    styles: ``,
    imports: [CardComponent]
})
export class CardListComponent {

}
