import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  heroNames: string[];
  deleteHero?: string;
  constructor() {
    this.heroNames = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
    this.deleteHero = '';
  }
  removeLastHero(): void {
    this.deleteHero = this.heroNames.pop();
  }
}
