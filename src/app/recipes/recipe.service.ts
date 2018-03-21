import { Injectable, EventEmitter } from '@angular/core';
import {Recipe} from './recipe.module';
import {Ingredient} from '../shared/ingredient.module';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Pizza',
      'Home made pizza',
      'https://www.iheartnaptime.net/wp-content/uploads/2016/08/pizza-740x740.jpg',
       [
            new Ingredient('meat', 2),
            new Ingredient('beef', 2),
        ]),
    new Recipe(
      'Home Made Pizza',
      'Home made pizza',
      'https://www.iheartnaptime.net/wp-content/uploads/2016/08/pizza-740x740.jpg',
      [
        new Ingredient('bread', 2),
        new Ingredient('beef', 2),
      ])
  ];

  getRecipe() {
    return this.recipes.slice();
  }

  constructor() { }

}
