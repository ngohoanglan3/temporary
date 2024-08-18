import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Media } from '../../../core/models/product.model';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [GalleriaModule, ImageModule],
  templateUrl: './media.component.html',
  styleUrl: './media.component.css',
  encapsulation: ViewEncapsulation.None
})
export class MediaComponent {
  @Input() media: Media[];
  responsiveOptions: any[] = [
    {
        breakpoint: '960px',
        numVisible: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];

  constructor() {
    this.media = [];
  }
}
