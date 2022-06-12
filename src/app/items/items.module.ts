import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list/item-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ItemListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ItemListComponent]
})
export class ItemsModule { }
