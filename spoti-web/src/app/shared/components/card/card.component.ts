import { Component, Input } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { Item } from '../../../core/interfaces/releases.interface';

@Component({
  selector: 'shared-card',
  standalone: true,
  imports: [HttpClientModule, RouterModule],
  templateUrl: './card.component.html',
  styles: ``,
})
export class CardComponent {
  @Input()
  public item!: any;

  constructor(private router: Router) {}

  goToAlbum() {
    if (this.item.album_group) {
      this.router.navigate(['/album/', this.item.id])
    }
  }

  ngOnInit() {
    if (!this.item) throw Error('Item required!');
  }
}
