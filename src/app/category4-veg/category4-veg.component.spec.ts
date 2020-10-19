import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Category4VegComponent } from './category4-veg.component';

describe('Category4VegComponent', () => {
  let component: Category4VegComponent;
  let fixture: ComponentFixture<Category4VegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Category4VegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Category4VegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
