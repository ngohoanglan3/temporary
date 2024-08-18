import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { SummaryComponent } from './summary/summary.component';
import { MediaComponent } from './media/media.component';
import { InfoComponent } from './info/info.component';
import { ProductsService } from '../../core/services/product/products.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../core/models/product.model';
import { ProviderService } from '../../core/services/provider/provider.service';
import { ModifiedResponse } from '../../core/models/provider.model';
import { ProviderComponent } from './provider/provider.component';
import { SkeletonModule } from 'primeng/skeleton';
import { ProductCarouselComponent } from './product-carousel/product-carousel.component';
import { SuggestedService } from '../../core/services/suggested/suggested.service';
import { productFilter } from '../../core/models/product-filter.model';
import { RecentlyService } from '../../core/services/recently/recently.service';

@Component({
  selector: 'app-catalog-products',
  standalone: true,
  imports: [
    SummaryComponent,
    MediaComponent,
    InfoComponent,
    ProviderComponent,
    SkeletonModule,
    ProductCarouselComponent,
  ],
  providers: [
    ProductsService,
    SuggestedService,
    RecentlyService,
    ProviderService,
  ],
  templateUrl: './catalog-products.component.html',
  styleUrl: './catalog-products.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class CatalogProductsComponent implements OnInit {
  suggestedSrc = inject(SuggestedService);
  productSrv = inject(ProductsService);
  providerSrv = inject(ProviderService);
  recentlySrc = inject(RecentlyService);

  suggestedLoading: boolean = true;
  providerLoading: boolean = true;
  recentlyLoading: boolean = true;

  product: Product;
  providers: ModifiedResponse[];
  suggested: productFilter[];
  recently: productFilter[];
  constructor(private route: ActivatedRoute) {
    this.product = {
      product_id: '',
      type: '',
      tag: [],
      suggested: '',
      summary: {
        name: '',
        details: '',
        model: '',
        brand_name: '',
      },
      media: [],
      info: {
        about: '',
        key_features: [],
        care_instructions: [],
        size_guide: {
          sizes: [],
          tableData: [],
        },
      },
    };
    this.suggested = [];
    this.recently = [];
    this.providers = [];
  }
  ngOnInit(): void {
    this.fetchProduct();
  }

  fetchProduct() {
    this.route.params.subscribe((params) => {
      const productId = params['id'];

      // Lấy mảng productIds từ localStorage hoặc tạo mảng mới nếu không tồn tại
      let productIds = JSON.parse(localStorage.getItem('productIds') || '[]');

      // Thêm id mới vào mảng
      if (!productIds.includes(productId)) {
        productIds.push(productId);
      }

      // Lưu lại mảng vào localStorage
      localStorage.setItem('productIds', JSON.stringify(productIds));

      // Gọi API để lấy thông tin sản phẩm
      this.productSrv.getProduct(productId).subscribe((productResponse) => {
        this.product = productResponse;

        // Gọi API để lấy danh sách sản phẩm gợi ý dựa trên sản phẩm hiện tại
        this.suggestedSrc
          .getSuggested(productResponse.suggested, productId)
          .subscribe((suggestedResponse) => {
            this.suggested = suggestedResponse;

            this.suggestedLoading = false; // Đánh dấu việc tải dữ liệu hoàn thành
          });

        // Gọi API để lấy thông tin nhà cung cấp của sản phẩm
        this.providerSrv
          .getProvider(productId)
          .subscribe((providerResponse) => {
            this.providers = providerResponse;

            this.providerLoading = false;
          });

        this.recentlySrc.getRecently(productIds).subscribe((recetlyResponse) => {
          this.recently = recetlyResponse;

          this.recentlyLoading = false;
        });
      });
    });
  }
}
