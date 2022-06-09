import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Item, items } from '../items';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  item: Item | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const itemIdFromRoute = Number(routeParams.get('itemId'));

    // Find the product that correspond with the id provided in route.
    this.item = items.find(item => item.id === itemIdFromRoute);
  }

}
