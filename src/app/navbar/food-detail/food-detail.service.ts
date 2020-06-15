import { Injectable } from '@angular/core';
import {INVENTORY} from './mock-food-item';
import {FoodItemDetail} from './food-detail';
import {FoodCategoryItem} from './food-category-detail';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FoodDetailService {

  constructor() { }
  getAllItems():Observable<FoodCategoryItem[]>{
  	return of(INVENTORY);
  }
  getItems(cat_id):Observable<FoodCategoryItem[]>{
  	return this.getAllItems().pipe(
  		map((x:FoodCategoryItem[])=>x.filter(category=>category.cat_id===cat_id))

  		);
  }
 
}
