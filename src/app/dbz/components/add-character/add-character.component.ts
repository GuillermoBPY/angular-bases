import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
})
export class AddCharacterComponent {
  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();
  character: Character;
  constructor() {
    this.character = {
      name: '',
      power: 0,
    };
  }
  emiteCharacter(): void {
    if (this.character.name.length === 0) return;
    this.onNewCharacter.emit(this.character);
    this.character = {
      name: '',
      power: 0,
    };
  }
}
