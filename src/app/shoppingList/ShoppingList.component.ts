
import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'shopping-list',
  templateUrl: 'ShoppingList.component.html',
})
export class ShoppingList {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 5),
  ];
  getIngredientsList() {
    return this.ingredients;
  }
  addShoppingList(ingredient:Ingredient){
    this.ingredients.push(ingredient);
  }
  clearShoppingList(ingredient:Ingredient){
    this.ingredients=[];
  }
  deleteIngredient(pos:number){
    this.ingredients.splice(pos,1);
  }
}
