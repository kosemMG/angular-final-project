import {IngredientModel} from '../shared/ingredient.model';
import {Subject} from 'rxjs';

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
  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  emitIngredients() {
    this.ingredientsChanged.next(this.ingredients.slice());
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

  updateIngredient(index: number, newIngredient: IngredientModel) {
    this.ingredients[index] = newIngredient;
    this.emitIngredients();
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.emitIngredients();
  }
}
