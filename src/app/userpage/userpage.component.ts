import { Component, OnInit } from '@angular/core';
import {FoodDetailComponent} from '../navbar/food-detail/food-detail.component';
import {InventoryService} from '../navbar/food-detail/inventory.service';
@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  added=[];
  totalPrice$=0;
  constructor(
  	private invservice:InventoryService) { }

  ngOnInit(): void {
  this.added=this.invservice.showFood();

  for(var item of this.added){
  	 this.totalPrice$=item.price*item.quantity+this.totalPrice$;
  }
  


}
}
