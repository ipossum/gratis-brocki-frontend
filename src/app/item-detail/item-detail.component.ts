import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//import { Item, items } from '../items';

import { Item } from "../model/itemDTO";
import { ItemService } from "../services/item.service";

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  item: Item;

  constructor(private route: ActivatedRoute, private itemService: ItemService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const itemIdFromRoute = Number(routeParams.get('itemId'));
    this.getItem(itemIdFromRoute);
  }

  private getItem(id:number){
    this.itemService.getItem(id).subscribe((response:Item) => {
      this.item = response;
    });
  }
}
