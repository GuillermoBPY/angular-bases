import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: ` <h3>Counter: {{ counter }}</h3>

    <button (click)="increase(1)">+1</button>
    <button (click)="decrease(1)">-1</button>
    <button (click)="reset()">Reset</button>`,
})
export class CounterComponent {
  public counter: number;
  constructor() {
    this.counter = 10;
  }

  increase(value: number): void {
    this.counter += value;
  }
  decrease(value: number): void {
    this.counter -= value;
  }
  reset(): void {
    this.counter = 10;
  }
}
