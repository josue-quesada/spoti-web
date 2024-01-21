import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CoreService } from '../../services/core.service';

@Component({
  selector: 'core-search-box',
  standalone: true,
  imports: [],
  templateUrl: './search-box.component.html',
  styles: ``,
})
export class SearchBoxComponent {
  @Input()
  public placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  public artistId: string = '';

  constructor(private coreService: CoreService){}

  emitValue(value: string) {
    this.onValue.emit(value);
  }

  searchArtistId(name:string){
    this.coreService.getArtistId(name).subscribe((data) => {
      this.artistId = data.artists.items[0].id;
    });
  }
}
