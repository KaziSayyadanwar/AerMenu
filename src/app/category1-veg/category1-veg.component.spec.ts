import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Category1VegComponent } from './category1-veg.component';

describe('Category1VegComponent', () => {
  let component: Category1VegComponent;
  let fixture: ComponentFixture<Category1VegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Category1VegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Category1VegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
