import { Component, OnInit,NgModule,OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { FoodCategory } from '../food-category';
import {FoodCategoryService}from '../food-category.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css']
})

export class NavItemComponent implements OnInit {
	foods$:Observable<FoodCategory[]>;
	selectedId:number;
  s;


    constructor(
    	private route:ActivatedRoute,
      public router:Router,
    	private	service:FoodCategoryService,

    	) {}

  ngOnInit(): void {

     this.foods$ = this.route.paramMap.pipe(
      switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getFoodCategories();
      })
    );
     
  }

  toggleModal(s) {
    console.log(s);
    this.router.navigate(['/']);

     this.router.navigate(['/food', s]);

  }
 


}
