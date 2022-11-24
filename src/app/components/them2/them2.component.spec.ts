import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Them2Component } from './them2.component';

describe('Them2Component', () => {
  let component: Them2Component;
  let fixture: ComponentFixture<Them2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Them2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Them2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
