import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [

      {
        id: 0,
        title: 'pera',
        price: 12.5,
        quantity: 5,
        completed: false
      },

      {
        id: 1,
        title: 'aguacate',
        price: 10,
        quantity: 3,
        completed: true
      },

      {
        id: 2,
        title: 'Carne',
        price: 45,
        quantity: 2,
        completed: true
      },
    ]
  }

  deleteItem(item: Item){
    this.items = this.items.filter(x=>x.id!=item.id);
  }

}
