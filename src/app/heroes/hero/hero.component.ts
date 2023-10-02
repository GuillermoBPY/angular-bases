import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public name: string;
  public age: number;
  constructor() {
    this.name = 'ironman';
    this.age = 45;
  }
  get capitalizeName(): string {
    return this.name.toUpperCase();
  }
  getHeroeDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(value: string): void {
    this.name = value;
  }
  changeAge(value: number): void {
    this.age = value;
  }
  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;
  }
}
