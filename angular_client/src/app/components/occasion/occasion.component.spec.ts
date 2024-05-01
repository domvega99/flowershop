import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OccasionComponent } from './occasion.component';

describe('OccasionComponent', () => {
  let component: OccasionComponent;
  let fixture: ComponentFixture<OccasionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OccasionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OccasionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});