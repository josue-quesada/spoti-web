import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../interfaces/releases.interface';

@Pipe({
  name: 'albumImage',
  standalone: true
})
export class ImagePipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    throw new Error('Method not implemented.');
  }

  // transform(item: Item): string {
  //   if(!item.id && !item.alt_img){
  //     return 'assets/no-image.jpg'
  //   }
  //   if(hero.alt_img) return hero.alt_img

  //   return `assets/heroes/${hero.id}.jpg`;
  // }

}
