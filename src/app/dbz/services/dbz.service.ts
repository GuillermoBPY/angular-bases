import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class DBZService {
  characters: Character[];
  constructor() {
    this.characters = [
      {
        id: uuid(),
        name: 'Goku',
        power: 500,
      },
      {
        id: uuid(),
        name: 'Vegeta',
        power: 500,
      },
      {
        id: uuid(),
        name: 'Freezer',
        power: 500,
      },
    ];
  }
  onNewCharacter(character: Character): void {
    const newCharacter: Character = { id: uuid(), ...character }; //En este linea se agrega el id al objeto completo

    // const newCharacter: Character = {
    //   id: uuid(),
    //   name: character.name,
    //   power: character.power,
    // };
    this.characters.push(newCharacter);
  }
  // onDeleteId(index: number): void {
  //   this.characters.splice(index, 1);
  // }
  onDeleteId(id: string): void {
    this.characters = this.characters.filter((char) => char.id !== id);
  }
}
