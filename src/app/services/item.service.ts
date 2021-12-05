import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Item } from '../models/item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  url:string = 'http://localhost:3000/items/';
  httpOptions = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  items:Item[] =[];

  constructor(private http:HttpClient) { }

  getItems():Observable<Item[]>{
    //return this.items;
    return this.http.get<Item[]>(this.url);
  }
  
  addItem(item:Item):Observable<Item>{
    //this.items.unshift(item);
    return this.http.post<Item>(this.url, item, this.httpOptions);
  }
  
  toggleItem(item:Item):Observable<Item>{
    return this.http.put<Item>(this.url + item.id, item, this.httpOptions);
  }

  deleteItem(item:Item):Observable<Item>{
    return this.http.delete<Item>(this.url + item.id);
  }


  
}
