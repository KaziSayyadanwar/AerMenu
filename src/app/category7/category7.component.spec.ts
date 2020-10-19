import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Category7Component } from './category7.component';

describe('Category7Component', () => {
  let component: Category7Component;
  let fixture: ComponentFixture<Category7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Category7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Category7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
