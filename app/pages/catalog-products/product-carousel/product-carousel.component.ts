import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { productFilter } from '../../../core/models/product-filter.model';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-carousel',
  standalone: true,
  imports: [CarouselModule, CardModule, ButtonModule, RouterLink],
  templateUrl: './product-carousel.component.html',
  styleUrl: './product-carousel.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class ProductCarouselComponent {
  @Input() productFilter: productFilter[];
  responsiveOptions: any[];

  constructor(private router: Router) {
    this.productFilter = [];
    this.responsiveOptions = [
      {
          breakpoint: '960px',
          numVisible: 3,
          numScroll: 3
      },
      {
        breakpoint: '600px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '480px',
        numVisible: 1,
        numScroll: 1
      }
  ];
  }

  navigateToProduct(productUri: string) {
    this.router.navigate(['/product', productUri]).then(() => {
      window.scrollTo(0, 0);
    });
  }
}
