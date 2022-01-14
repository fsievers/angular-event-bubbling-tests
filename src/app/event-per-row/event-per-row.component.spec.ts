import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPerRowComponent } from './event-per-row.component';

describe('EventPerRowComponent', () => {
  let component: EventPerRowComponent;
  let fixture: ComponentFixture<EventPerRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventPerRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventPerRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
