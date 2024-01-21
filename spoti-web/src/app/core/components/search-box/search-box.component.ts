import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CoreService } from '../../services/core.service';
import { ActivatedRoute } from '@angular/router';

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

  emitValue(value: string) {
    this.onValue.emit(value);
  }
}
