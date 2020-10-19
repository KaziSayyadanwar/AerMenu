import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Category8VegComponent } from './category8-veg.component';

describe('Category8VegComponent', () => {
  let component: Category8VegComponent;
  let fixture: ComponentFixture<Category8VegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Category8VegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Category8VegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
