import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendLine } from './trend-line';

describe('TrendLine', () => {
  let component: TrendLine;
  let fixture: ComponentFixture<TrendLine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendLine],
    }).compileComponents();

    fixture = TestBed.createComponent(TrendLine);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
