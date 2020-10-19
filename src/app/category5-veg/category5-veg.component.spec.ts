import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Category5VegComponent } from './category5-veg.component';

describe('Category5VegComponent', () => {
  let component: Category5VegComponent;
  let fixture: ComponentFixture<Category5VegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Category5VegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Category5VegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
