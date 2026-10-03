import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditWeightDialog } from './edit-weight-dialog';

describe('EditWeightDialog', () => {
  let component: EditWeightDialog;
  let fixture: ComponentFixture<EditWeightDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditWeightDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(EditWeightDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
