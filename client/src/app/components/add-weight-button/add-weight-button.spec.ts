import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddWeightButton } from './add-weight-button';

describe('AddWeightButton', () => {
  let component: AddWeightButton;
  let fixture: ComponentFixture<AddWeightButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddWeightButton],
    }).compileComponents();

    fixture = TestBed.createComponent(AddWeightButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
