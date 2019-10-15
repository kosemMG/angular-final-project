import {RecipeModel} from './recipe.model';
import {Injectable} from '@angular/core';
import {IngredientModel} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<RecipeModel[]>();

  private recipes: RecipeModel[] = [
    new RecipeModel(
      'Hamburger',
      'A delicious, juicy burger. Just eat me!',
      'https://assets3.thrillist.com/v1/image/2797371/size/tl-horizontal_main_2x.jpg',
      [
        new IngredientModel('Meat', 1),
        new IngredientModel('Bun', 1),
        new IngredientModel('Lettuce', 1)
      ]
    ),
    new RecipeModel(
      'Schnitzel',
      'Tasty schnitzel with french fries. Just eat me!',
      'https://cdn.imgbin.com/25/0/1/imgbin-milanesa-french-fries-fried-fish-fried-chicken-schnitzel-fried-chicken-wuSYtdtwNLBxbeNkKuFkmzSG3.jpg',
      [
        new IngredientModel('Meat', 1),
        new IngredientModel('Fries', 20)
      ]
    )
  ];

  constructor(
    private shoppingListService: ShoppingListService,
    private route: ActivatedRoute
  ) {
  }

  /**
   * Returns a new copy of the recipes array.
   */
  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: IngredientModel[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addRecipe(recipe: RecipeModel) {
    this.recipes.push(recipe);
    this.emitRecipes();
  }

  updateRecipe(index: number, newRecipe: RecipeModel) {
    this.recipes[index] = newRecipe;
    this.emitRecipes();
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.emitRecipes();
  }

  emitRecipes() {
    this.recipesChanged.next(this.recipes.slice());
  }
}
