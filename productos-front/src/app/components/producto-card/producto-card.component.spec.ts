import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoCardComponent } from './producto-card.component';

describe('ProductoComponent', () => {
  let component: ProductoCardComponent;
  let fixture: ComponentFixture<ProductoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductoCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
