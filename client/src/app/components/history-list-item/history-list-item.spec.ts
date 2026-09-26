import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistoryListItem } from './history-list-item';

describe('HistoryListItem', () => {
  let component: HistoryListItem;
  let fixture: ComponentFixture<HistoryListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryListItem],
    }).compileComponents();

    fixture = TestBed.createComponent(HistoryListItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
