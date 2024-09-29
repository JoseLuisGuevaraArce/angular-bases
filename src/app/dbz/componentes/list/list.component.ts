import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10
    }
  ]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();
  // public onDelete: EventEmitter<number> = new EventEmitter();
  // onDelete \ Index value: number

  onDeleteCharacter(heroId?:string):void {
    // console.log(index);
    
    // TODO: Emitir el ID del personaje
    // console.log({index});
    // this.onDelete.emit(index);
    if (!heroId) return;
    this.onDelete.emit(heroId);
    
  }
}
