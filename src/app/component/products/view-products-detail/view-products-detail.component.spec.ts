import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductsDetailComponent } from './view-products-detail.component';

describe('ViewProductsDetailComponent', () => {
  let component: ViewProductsDetailComponent;
  let fixture: ComponentFixture<ViewProductsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProductsDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProductsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
