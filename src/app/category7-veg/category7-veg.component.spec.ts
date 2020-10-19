import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Category7VegComponent } from './category7-veg.component';

describe('Category7VegComponent', () => {
  let component: Category7VegComponent;
  let fixture: ComponentFixture<Category7VegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Category7VegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Category7VegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
