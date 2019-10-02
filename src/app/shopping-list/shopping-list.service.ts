import {IngredientModel} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<IngredientModel[]>();
  private ingredients: IngredientModel[] = [
    new IngredientModel('Potatoes', 5),
    new IngredientModel('Tomatoes', 7)
  ];

  /**
   * Returns a new copy of the shopping list array.
   */
  getIngredients() {
    return this.ingredients.slice();
  }

  emitIngredients() {
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredient(ingredient: IngredientModel) {
    if (ingredient.amount > 0) {
      this.ingredients.push(ingredient);
      this.emitIngredients();
    }
  }

  addIngredients(ingredients: IngredientModel[]) {
    /*for (let ingredient of ingredients) {
      this.addIngredient(ingredient);
    }*/
    this.ingredients.push(...ingredients);
    this.emitIngredients();
  }
}
