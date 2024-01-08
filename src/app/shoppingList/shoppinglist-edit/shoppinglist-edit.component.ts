import { Component,EventEmitter,Output,Input } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
@Component({
  selector: 'app-shoppinglist-edit',
  templateUrl: './shoppinglist-edit.component.html',
  styleUrls: ['./shoppinglist-edit.component.css']
})
export class ShoppinglistEditComponent {
 @Input() ingredientName:string;
 @Input() ingredientCount:number;

  @Output() onIngredientAdd=new EventEmitter<Ingredient>();
  @Output() onClearIngredient=new EventEmitter<Ingredient>();


addIngredient(){
  this.onIngredientAdd.emit(new Ingredient(this.ingredientName,this.ingredientCount));
}
clearIngredients(){
  this.onClearIngredient.emit();
}

}
