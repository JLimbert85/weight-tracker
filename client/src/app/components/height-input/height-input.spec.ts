import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeightInput } from './height-input';

describe('HeightInput', () => {
  let component: HeightInput;
  let fixture: ComponentFixture<HeightInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeightInput],
    }).compileComponents();

    fixture = TestBed.createComponent(HeightInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
