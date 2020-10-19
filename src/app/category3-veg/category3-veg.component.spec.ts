import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Category3VegComponent } from './category3-veg.component';

describe('Category3VegComponent', () => {
  let component: Category3VegComponent;
  let fixture: ComponentFixture<Category3VegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Category3VegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Category3VegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
