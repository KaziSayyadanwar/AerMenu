import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Category6VegComponent } from './category6-veg.component';

describe('Category6VegComponent', () => {
  let component: Category6VegComponent;
  let fixture: ComponentFixture<Category6VegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Category6VegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Category6VegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
