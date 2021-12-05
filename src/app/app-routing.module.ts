import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemsComponent} from './../app/components/items/items.component';
import {AddItemComponent} from './components/additem/additem.component';

const routes: Routes = [
  {
    path: '',
    component: ItemsComponent
  },
  {
    path:'add',
    component: AddItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
