import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navabar3Component } from './navabar3.component';

describe('Navabar3Component', () => {
  let component: Navabar3Component;
  let fixture: ComponentFixture<Navabar3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Navabar3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Navabar3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
