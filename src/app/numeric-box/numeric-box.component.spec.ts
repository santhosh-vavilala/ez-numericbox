import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumericBoxComponent } from './numeric-box.component';

describe('NumericBoxComponent', () => {
  let component: NumericBoxComponent;
  let fixture: ComponentFixture<NumericBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumericBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumericBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
