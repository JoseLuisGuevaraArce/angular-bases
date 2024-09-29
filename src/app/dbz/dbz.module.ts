import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddCharacterComponent } from './componentes/add-character/add-character.component';
import { ListComponent } from './componentes/list/list.component';
import { MainPageComponent } from './pages/main-page.component';

@NgModule({
  declarations: [
    AddCharacterComponent,
    ListComponent,
    MainPageComponent,
  ],
  exports: [MainPageComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
