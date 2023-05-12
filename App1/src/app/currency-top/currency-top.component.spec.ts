import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyTopComponent } from './currency-top.component';

describe('CurrencyTopComponent', () => {
  let component: CurrencyTopComponent;
  let fixture: ComponentFixture<CurrencyTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrencyTopComponent]
    });
    fixture = TestBed.createComponent(CurrencyTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
