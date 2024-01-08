import {Component} from '@angular/core';
import { Recipe } from './Recipe.model';


@Component({
    selector:'recipe-book',
    templateUrl:'Recipebook.component.html'
})
export class RecipeBook{
    recipeDetails:Recipe;
    displayRecipeDetails(recipe:Recipe){
        this.recipeDetails=recipe;
        }


}