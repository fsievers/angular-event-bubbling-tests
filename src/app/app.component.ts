import { Component, OnInit } from '@angular/core';

const SIZE = 100_000;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'event-bubbling';

  public elements: string[] = new Array<string>(SIZE);
  public output = '';

  public ngOnInit(): void {
    this.output += `start creation of ${SIZE} elements\n`;
    setTimeout(() => {
      for (let idx = 0; idx < SIZE; idx++) {
        this.elements[idx] = `This is element #${idx}`;
      }
      this.output += `finished creating ${SIZE} elements\n`;
    }, 250);
  }
}
