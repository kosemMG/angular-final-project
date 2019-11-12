import {Subject} from 'rxjs';

import {IngredientModel} from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new Subject<IngredientModel[]>();
  startedEditing = new Subject<number>();
  private ingredients: IngredientModel[] = [
    new IngredientModel('Potatoes', 5),
    new IngredientModel('Tomatoes', 7)
  ];

  /**
   * Returns a new copy of the shopping list array.
   */
  getIngredients(): IngredientModel[] {
    return this.ingredients.slice();
  }

  getIngredient(index: number): IngredientModel {
    return this.ingredients[index];
  }

  emitIngredients(): void {
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  /**
   * Adds a new ingredient
   * @param ingredient - an object {name: string, amount: number}
   */
  addIngredient(ingredient: IngredientModel): void {
    if (ingredient.amount > 0) {
      this.ingredients.push(ingredient);
      this.emitIngredients();
    }
  }

  /**
   * Adds ingredients of a certain recipe to the general ingredient list.
   * @param ingredients - an array of objects {name: string, amount: number}
   */
  addIngredients(ingredients: IngredientModel[]): void {
    this.ingredients.push(...ingredients);
    this.emitIngredients();
  }

  updateIngredient(index: number, newIngredient: IngredientModel): void {
    this.ingredients[index] = newIngredient;
    this.emitIngredients();
  }

  deleteIngredient(index: number): void {
    this.ingredients.splice(index, 1);
    this.emitIngredients();
  }
}
