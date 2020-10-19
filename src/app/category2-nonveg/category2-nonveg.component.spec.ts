import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Category2NonvegComponent } from './category2-nonveg.component';

describe('Category2NonvegComponent', () => {
  let component: Category2NonvegComponent;
  let fixture: ComponentFixture<Category2NonvegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Category2NonvegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Category2NonvegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
