import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Category6NonvegComponent } from './category6-nonveg.component';

describe('Category6NonvegComponent', () => {
  let component: Category6NonvegComponent;
  let fixture: ComponentFixture<Category6NonvegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Category6NonvegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Category6NonvegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
