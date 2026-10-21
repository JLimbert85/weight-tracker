import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddGoalWeightDialog } from './add-goal-weight-dialog';

describe('AddGoalWeightDialog', () => {
  let component: AddGoalWeightDialog;
  let fixture: ComponentFixture<AddGoalWeightDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddGoalWeightDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(AddGoalWeightDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
