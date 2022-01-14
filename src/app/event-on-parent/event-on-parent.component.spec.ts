import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventOnParentComponent } from './event-on-parent.component';

describe('EventOnParentComponent', () => {
  let component: EventOnParentComponent;
  let fixture: ComponentFixture<EventOnParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventOnParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventOnParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
