import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorTitleComponent } from './calculator-title.component';

describe('CalculatorTitleComponent', () => {
  let component: CalculatorTitleComponent;
  let fixture: ComponentFixture<CalculatorTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
