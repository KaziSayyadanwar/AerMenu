import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Category4NonvegComponent } from './category4-nonveg.component';

describe('Category4NonvegComponent', () => {
  let component: Category4NonvegComponent;
  let fixture: ComponentFixture<Category4NonvegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Category4NonvegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Category4NonvegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
