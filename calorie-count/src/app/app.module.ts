import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FruitsCountComponent } from './fruits-count/fruits-count.component';
import { MyFoodsComponent } from './my-foods/my-foods.component';
import { FoodListComponent } from './food-list/food-list.component';
import { MyfoodsComponent } from './myfoods/myfoods.component';

@NgModule({
  declarations: [
    AppComponent,
    FruitsCountComponent,
    MyFoodsComponent,
    FoodListComponent,
    MyfoodsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
