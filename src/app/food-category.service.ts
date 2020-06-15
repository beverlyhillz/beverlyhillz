import { Injectable } from '@angular/core';
import {FoodCategory} from './food-category';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import {FOODS} from './mock-food-category';
@Injectable({
  providedIn: 'root'
})
export class FoodCategoryService {

  constructor() { }

getFoodCategories():Observable<FoodCategory[]>{
  return of(FOODS);

}

}
