import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Them1Component } from './them1.component';

describe('Them1Component', () => {
  let component: Them1Component;
  let fixture: ComponentFixture<Them1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Them1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Them1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
