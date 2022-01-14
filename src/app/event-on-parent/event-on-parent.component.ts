import { Component, Input } from '@angular/core';
import { Timer } from '../timer';

@Component({
  selector: 'app-event-on-parent',
  templateUrl: './event-on-parent.component.html',
  styleUrls: ['./event-on-parent.component.css'],
})
export class EventOnParentComponent {
  @Input() items?: string[];
  public showItems = false;
  public output = '';
  private t?: Timer;

  public onClick(event: MouseEvent, eventString: string): void {
    console.log(event);
    const item = event.target as HTMLDivElement;
    this.output = `${eventString} on '${item.innerText}'`;
    event.preventDefault(); // just to prevent opening contextmenu on right click event
  }

  ngDoCheck() {
    this.t = new Timer('component "event-on-parent" render');
  }

  ngAfterViewChecked() {
    this.t?.stop();
  }
}
