import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Them3Component } from './them3.component';

describe('Them3Component', () => {
  let component: Them3Component;
  let fixture: ComponentFixture<Them3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Them3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Them3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
