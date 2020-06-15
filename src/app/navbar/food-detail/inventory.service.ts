import { Injectable } from '@angular/core';
import {FoodCategoryItem} from './food-category-detail'
import {USERFOOD} from './mock-inventory'
@Injectable({
  providedIn: 'root'
})
export class InventoryService {
static nextFoodId=100;
items=[];
  constructor() { }

  addFood(ITEM:FoodCategoryItem){
  	if(ITEM){
  		
  		this.items.push(ITEM);
        console.log(ITEM);
  	}
  }
  showFood(){
   return this.items;
  }
}
