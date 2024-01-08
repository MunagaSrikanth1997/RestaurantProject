import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { RecipeBook } from './Recipes/Recipebook.component';
import { RecipeDetailsComponent } from './Recipes/recipe-details/recipe-details.component';
import { RecipeListComponent } from './Recipes/recipe-list/recipe-list.component';
import { ShoppingList } from './shoppingList/ShoppingList.component';
import { IngredientComponent } from './shoppingList/ingredient/ingredient.component';
import { ShoppinglistEditComponent } from './shoppingList/shoppinglist-edit/shoppinglist-edit.component';
import { RecipeItemComponent } from './Recipes/recipe-list/recipe-item/recipe-item.component';
import { DropDownToggleDirective } from './CustomDirectives/drop-down-toggle.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeBook,
    RecipeDetailsComponent,
    RecipeListComponent,
    ShoppingList,
    IngredientComponent,
    ShoppinglistEditComponent,
    RecipeItemComponent,
    DropDownToggleDirective
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
