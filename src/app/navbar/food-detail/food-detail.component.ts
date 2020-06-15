import { switchMap } from 'rxjs/operators';
import { Component, OnInit,OnChanges } from '@angular/core';
import {FoodItemDetail} from './food-detail';
import {FoodDetailService} from './food-detail.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import {FoodCategoryItem} from './food-category-detail';
import {InventoryService} from './inventory.service';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css']
})
export class FoodDetailComponent implements OnInit {
  foodcategoryitems$:Observable<FoodCategoryItem[]>;
  sub:any;
  foodcat$:"wheat";
  itemquantity$:number=0;


  tog=1;
  cat_id=1;
  added=[{
        cat_id:2,name:'Rice',id:4,brand:'Ricebrand2',price:200,quantity:2
      },
      {
        cat_id:2,name:'Rice',id:4,brand:'Ricebrand2',price:200,quantity:2
      },



];
  constructor(
	private route: ActivatedRoute,
    private router: Router,
    private service: FoodDetailService,
    private invservice:InventoryService,

  	) { }

  ngOnInit() {
      console.log(this.itemquantity$);
  	
     this.sub = this.route.params.subscribe(params =>{
       this.cat_id=+params['id'];
       console.log("hi",this.cat_id);
       if(this.cat_id)
       this.foodcategoryitems$=this.service.getItems(this.cat_id);
     else
       this.foodcategoryitems$=this.service.getAllItems();

      });
     
     
     
       }
       addItem(item:FoodCategoryItem){
        this.invservice.addFood(item);
        item.quantity=1;
        this.tog=0;

       }
       showItem(){
         this.added=this.invservice.showFood();

       }
       inc(item){
         item.quantity=item.quantity+1;

       }
       dec(item){
         item.quantity=item.quantity-1;
       }
       
  

  
}
