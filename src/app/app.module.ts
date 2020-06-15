import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavItemComponent } from './navbar/nav-item.component';
import { FoodDetailComponent } from './navbar/food-detail/food-detail.component';
import { AddItemComponent } from './navbar/food-detail/add-item.component';
import { UserpageComponent } from './userpage/userpage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavItemComponent,
    FoodDetailComponent,
    AddItemComponent,
    UserpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
