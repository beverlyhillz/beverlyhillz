import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavItemComponent} from './navbar/nav-item.component';
import {FoodDetailComponent} from './navbar/food-detail/food-detail.component';
import {UserpageComponent} from './userpage/userpage.component'
const foodRoutes: Routes = [
{path:' ',component:NavItemComponent},
{path:'food',component:FoodDetailComponent},
{path:'food/:id',component:FoodDetailComponent},
{path:'user',component:UserpageComponent},


];
const routes:Routes=[];

@NgModule({
  imports: [RouterModule.forRoot(foodRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

