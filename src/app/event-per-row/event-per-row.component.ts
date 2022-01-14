import { Component, Input } from '@angular/core';
import { Timer } from '../timer';

@Component({
  selector: 'app-event-per-row',
  templateUrl: './event-per-row.component.html',
  styleUrls: ['./event-per-row.component.css'],
})
export class EventPerRowComponent {
  @Input() items?: string[];
  public showItems = false;
  public output = '';
  private t?: Timer;

  public onClick(event: Event, eventString: string, item: string): void {
    this.output = `${eventString} on '${item}'`;
    event.preventDefault(); // just to prevent opening contextmenu on right click event
  }

  ngDoCheck() {
    this.t = new Timer('component "event-per-row" render');
  }

  ngAfterViewChecked() {
    this.t?.stop();
  }
}
