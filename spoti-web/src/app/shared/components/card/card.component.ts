import { Component, Input } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Item } from '../../../core/interfaces/releases.interface';


@Component({
  selector: 'shared-card',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './card.component.html',
  styles: ``
})
export class CardComponent {

  @Input()
  public item!: any

  ngOnInit(){
    if(!this.item) throw Error('Item required!')
  }
}
