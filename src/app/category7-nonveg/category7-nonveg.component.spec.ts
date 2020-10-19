import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Category7NonvegComponent } from './category7-nonveg.component';

describe('Category7NonvegComponent', () => {
  let component: Category7NonvegComponent;
  let fixture: ComponentFixture<Category7NonvegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Category7NonvegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Category7NonvegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
