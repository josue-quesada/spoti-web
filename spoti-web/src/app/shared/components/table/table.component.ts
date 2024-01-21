import { Component, Input } from '@angular/core';
import { Album } from '../../../core/interfaces/album.interface';

@Component({
  selector: 'shared-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styles: '',
})
export class TableComponent {
  @Input()
  public songs!: any[];

  @Input()
  public album?: Album;
  
}
