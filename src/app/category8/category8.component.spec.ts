import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Category8Component } from './category8.component';

describe('Category8Component', () => {
  let component: Category8Component;
  let fixture: ComponentFixture<Category8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Category8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Category8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
