import { Component } from '@angular/core';
import { TableComponent } from '../../../shared/components/table/table.component';
import { Artist } from '../../interfaces/artist.interface';
import { CoreService } from '../../services/core.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Album } from '../../interfaces/album.interface';

@Component({
  selector: 'app-album-page',
  standalone: true,
  templateUrl: './album-page.component.html',
  styles: ``,
  imports: [TableComponent],
})
export class AlbumPageComponent {
  public albumId: string = '';
  public album?: Album;
  public artistId: string = '';
  public artist?: Artist;
  public albumSongs: any[] = [];

  constructor(
    private coreService: CoreService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  getAlbum(id: string) {
    this.coreService.getAlbumById(id).subscribe((data) => {
      this.album = data;
      this.artistId = data.artists[0].id;
      this.albumSongs = data.tracks.items; 
    });
  }

  goBack() {
    this.router.navigate(['']);
  }




  ngOnInit() {
    this.albumId = this.activatedRoute.snapshot.params['id'];
    this.getAlbum(this.albumId);
  }
}
