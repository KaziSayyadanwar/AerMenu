import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Category1NonvegComponent } from './category1-nonveg.component';

describe('Category1NonvegComponent', () => {
  let component: Category1NonvegComponent;
  let fixture: ComponentFixture<Category1NonvegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Category1NonvegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Category1NonvegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
