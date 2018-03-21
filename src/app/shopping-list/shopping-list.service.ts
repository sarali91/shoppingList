import { Injectable, EventEmitter } from '@angular/core';
import {Ingredient} from '../shared/ingredient.module';

@Injectable()
export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Pear',20),
  ];

  constructor() { }

  getIngredient() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }


}
