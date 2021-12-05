import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

  title:string='';
  price:number=0;
  quantity: number=0;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const item = new Item();
    item.title = this.title;
    item.price = this.price;
    item.quantity = this.quantity;
    item.completed = false;

    this.itemService.addItem(item).subscribe(i => {
      this.router.navigate(['/']);
    });

    /* this.addItem.emit(item);
    this.router.navigate(['/']);  */
  }

}


