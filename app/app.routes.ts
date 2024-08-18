import { Routes } from '@angular/router';
import { CatalogProductsComponent } from './pages/catalog-products/catalog-products.component';

export const routes: Routes = [
  {
    path: 'product/:id',
    component: CatalogProductsComponent,
  },
];
