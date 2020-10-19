import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Category2VegComponent } from './category2-veg.component';

describe('Category2VegComponent', () => {
  let component: Category2VegComponent;
  let fixture: ComponentFixture<Category2VegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Category2VegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Category2VegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
