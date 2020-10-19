import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Category3NonvegComponent } from './category3-nonveg.component';

describe('Category3NonvegComponent', () => {
  let component: Category3NonvegComponent;
  let fixture: ComponentFixture<Category3NonvegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Category3NonvegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Category3NonvegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
