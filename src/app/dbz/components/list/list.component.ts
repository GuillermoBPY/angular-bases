import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input()
  characterList: Character[];
  constructor() {
    this.characterList = [];
  }

  @Output()
  onDeleteId: EventEmitter<string> = new EventEmitter();
  onDeleteCharacter(id?: string): void {
    if (!id) return;
    this.onDeleteId.emit(id);
  }
}
