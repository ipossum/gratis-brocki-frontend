import { Component, OnInit } from '@angular/core';
import { Item } from "../model/itemDTO";
import { ItemService } from "../services/item.service";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  item = {
    id: null as number,
    title: '',
    description: '',
    picture: '',
    category: '',
    condition: '',
    messages: '',
    owner: '',
    postalCode: null as number
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
      title: this.item.title,
      id: this.item.id,
      description: this.item.description,
      picture: this.item.picture,
      category: this.item.category,
      condition: this.item.condition,
      messages: this.item.messages,
      owner: this.item.owner,
      postalCode: this.item.postalCode
    };
    this.itemService.createItem(data).subscribe(response => {
      console.log(response)
      this.getItems();
    });
  }

  setItemEdit(item: Item) {
    this.item.title = item.title;
    this.item.id = item.id;
    this.item.description = item.description;
    this.item.picture = item.picture;
    this.item.category = item.category;
    this.item.condition = item.condition;
    this.item.messages = item.messages;
    this.item.owner = item.owner;
    this.item.postalCode = item.postalCode;

    this.edit = false;
    this.add = true;
  }

  resetValues() {
    this.item.title = "";
    this.item.id = null;
    this.item.description = '';
    this.item.picture = '';
    this.item.category = '';
    this.item.condition = '';
    this.item.messages = '';
    this.item.owner = '';
    this.item.postalCode = null;

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
