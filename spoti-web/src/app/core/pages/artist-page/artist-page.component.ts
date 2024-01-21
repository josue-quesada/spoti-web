import { Component } from '@angular/core';
import { CoreService } from '../../services/core.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Artist } from '../../interfaces/artist.interface';
import { TableComponent } from '../../../shared/components/table/table.component';

@Component({
  selector: 'app-artist-page',
  standalone: true,
  templateUrl: './artist-page.component.html',
  styles: ``,
  imports: [TableComponent],
})
export class ArtistPageComponent {
  public artistId: string = '';
  public artist?: Artist;
  public topTracks: any[] = [];

  constructor(
    private coreService: CoreService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  getArtist(id: string) {
    this.coreService.getArtist(id).subscribe((data) => {
      this.artist = data;
    });
  }

  getTopTracks(id: string) {
    this.coreService.getArtistTops(id).subscribe((data) => {
      this.topTracks = data.tracks;
    });
  }

  goBack() {
    this.router.navigate(['']);
  }

  ngOnInit() {
    this.artistId = this.activatedRoute.snapshot.params['id'];
    this.getArtist(this.artistId);
    this.getTopTracks(this.artistId);
  }
}
