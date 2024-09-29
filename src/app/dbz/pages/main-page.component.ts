import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../servicios/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  // // public characters: Character[] = [
  // //   {
  // //     name: 'Krilin',
  // //     power: 1000
  // //   },
  // //   {
  // //     name: 'Goku',
  // //     power: 9500
  // //   },
  // //   {
  // //     name: 'Vegueta',
  // //     power: 7500
  // //   }
  // // ];


  // onNewCharacter(character: Character):void {
  //   this.characters.push(character);
  // }

  // onDeleteCharacter(index:number) {
  //   this.characters.splice(index, 1);
  // }

  constructor(
    // public dbzService:DbzService
    private dbzService:DbzService
  ) {}

  get characters(): Character[] {
    // Mejor crear una copia con el operador spread
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id:string):void {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character:Character):void {
    this.dbzService.addCharacter(character);
  }
  
}