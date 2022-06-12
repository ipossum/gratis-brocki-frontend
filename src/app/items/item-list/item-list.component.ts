import { Component, OnInit } from '@angular/core';
import { Item } from "../item.model"
import { ItemService } from "../item.service"

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  item = {
    name: '',
    id: null as number
  }

  edit = true;
  add = false;
  items: Item[];

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.getItems()
  }

  private getItems() {
    this.itemService.getItems().subscribe(items => this.items = items);
  }

  addItem() {
    const data = {
      name: this.item.name,
      id: this.item.id
    };
    this.itemService.createItem(data).subscribe(response => {
      console.log(response)
      this.getItems();
    });
  }

  setItemEdit(item: Item) {
    this.item.name = item.name;
    this.item.id = item.id;
    this.edit = false;
    this.add = true;
  }

  resetValues() {
    this.item.name = "";
    this.item.id = null;
    this.edit = true;
    this.add = false;
  }

  removeItem(item: Item) {
    const id = item.id;
    console.log(item)
    this.itemService.deleteItem(id).subscribe(item => console.log(item));
    this.getItems()
  }

  updateItem(){
    this.itemService.editItem(this.item).subscribe(response => console.log(response));
    this.getItems()
    this.resetValues()
  }
}
