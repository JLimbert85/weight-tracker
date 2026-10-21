import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeasurementsDialog } from './measurements-dialog';

describe('MeasurementsDialog', () => {
  let component: MeasurementsDialog;
  let fixture: ComponentFixture<MeasurementsDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeasurementsDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(MeasurementsDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
