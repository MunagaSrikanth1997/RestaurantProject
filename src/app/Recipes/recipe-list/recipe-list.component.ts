import { Component, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../Recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
recipes:Recipe[]=[new Recipe('This is Recipe Name','Th Description','https://www.visittnt.com/blog/wp-content/uploads/2017/09/maxresdefault-1.jpg'),
new Recipe('The Recipe Name','Th Description','https://www.foodiecrush.com/wp-content/uploads/2018/02/Asian-Red-Curry-Hot-Pot-foodiecrush.com-047-1024x1536.jpg'),
new Recipe('The Recipe Name','Th Description','https://www.visittnt.com/blog/wp-content/uploads/2017/09/maxresdefault-1.jpg')];
@Output() displayDecipeDetails=new EventEmitter<Recipe>();

recipeDetails(pos:number){
this.displayDecipeDetails.emit(this.recipes[pos]);
}
}
