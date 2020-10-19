import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Category5NonvegComponent } from './category5-nonveg.component';

describe('Category5NonvegComponent', () => {
  let component: Category5NonvegComponent;
  let fixture: ComponentFixture<Category5NonvegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Category5NonvegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Category5NonvegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
