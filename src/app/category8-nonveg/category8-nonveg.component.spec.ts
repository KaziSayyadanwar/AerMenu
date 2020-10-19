import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Category8NonvegComponent } from './category8-nonveg.component';

describe('Category8NonvegComponent', () => {
  let component: Category8NonvegComponent;
  let fixture: ComponentFixture<Category8NonvegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Category8NonvegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Category8NonvegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
