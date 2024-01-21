import { Component } from '@angular/core';
import { CardListComponent } from '../../../shared/components/card-list/card-list.component';
import { Albums, Item } from '../../interfaces/releases.interface';
import { CoreService } from '../../services/core.service';
import { CardComponent } from '../../../shared/components/card/card.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styles: ``,
  imports: [CardListComponent, CardComponent],
})
export class HomePageComponent {
  public releases: Item[] = [];

  constructor(private coreService: CoreService) {}

  ngOnInit() {
    this.coreService
      .getReleases()
      .subscribe((albums) => (this.releases = albums.albums.items));
  }
}
