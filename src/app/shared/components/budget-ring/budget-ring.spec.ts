import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetRing } from './budget-ring';

describe('BudgetRing', () => {
  let component: BudgetRing;
  let fixture: ComponentFixture<BudgetRing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetRing],
    }).compileComponents();

    fixture = TestBed.createComponent(BudgetRing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
