import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryHomepageComponent } from './history-homepage.component';

describe('HistoryHomepageComponent', () => {
  let component: HistoryHomepageComponent;
  let fixture: ComponentFixture<HistoryHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryHomepageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoryHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
