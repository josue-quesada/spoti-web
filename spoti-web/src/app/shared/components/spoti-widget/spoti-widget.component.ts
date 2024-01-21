import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-spoti-widget',
  standalone: true,
  imports: [],
  templateUrl: './spoti-widget.component.html',
  styles: ''
})
export class SpotiWidgetComponent {

 @Input()
 public uri:string = '';
  
  constructor(private sanitizer: DomSanitizer) {}

  getSafeUrl(id: string): SafeResourceUrl {
    const url = `https://open.spotify.com/embed/track/${id}?utm_source=generator`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  // ngOnInit(){
  //   onSpotifyIframeApiReady = (IFrameAPI) => {
  //     const element = document.getElementById('embed-iframe');
  //     const options = {
  //       uri: 'spotify:episode:7makk4oTQel546B0PZlDM5'
  //     };
  //     const callback = (EmbedController) => {
  //       // Your callback implementation goes here
  //     };
  //     IFrameAPI.createController(element, options, callback);
  //   };
  // }
}
