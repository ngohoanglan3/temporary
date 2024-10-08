import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogProductsComponent } from './catalog-products.component';

describe('CatalogProductsComponent', () => {
  let component: CatalogProductsComponent;
  let fixture: ComponentFixture<CatalogProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
