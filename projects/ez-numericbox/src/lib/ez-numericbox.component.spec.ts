import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EzNumericboxComponent } from './ez-numericbox.component';

describe('EzNumericboxComponent', () => {
  let component: EzNumericboxComponent;
  let fixture: ComponentFixture<EzNumericboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EzNumericboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EzNumericboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
