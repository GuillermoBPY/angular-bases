import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  characters: Character[];
  constructor() {
    this.characters = [
      {
        name: 'Goku',
        power: 500,
      },
      {
        name: 'Vegeta',
        power: 500,
      },
    ];
  }
  onNewCharacter(character: Character): void {
    this.characters.push(character);
  }
  onDeleteId(index: number): void {
    this.characters.splice(index, 1);
  }
}
