import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getItems() {
    return [
      {
        id: 0,
        title: 'manzana',
        price: 20,
        quantity: 4,
        completed: false
      },
      {
        id: 0,
        title: 'leche',
        price: 20,
        quantity: 4,
        completed: true
      },
      {
        id: 0,
        title: 'leche',
        price: 20,
        quantity: 4,
        completed: true
      }
    ];
  }

}
