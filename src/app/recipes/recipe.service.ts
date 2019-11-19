import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { RecipeModel } from './recipe.model';
import { IngredientModel } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

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
        new IngredientModel('Buns', 2),
        new IngredientModel('Lettuce', 3)
      ]
    ),
    new RecipeModel(
      'Schnitzel',
      'Tasty schnitzel with french fries. Just eat me!',
      // tslint:disable-next-line:max-line-length
      'https://cdn.imgbin.com/25/0/1/imgbin-milanesa-french-fries-fried-fish-fried-chicken-schnitzel-fried-chicken-wuSYtdtwNLBxbeNkKuFkmzSG3.jpg',
      [
        new IngredientModel('Meat', 1),
        new IngredientModel('Fries', 20)
      ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService,
              private route: ActivatedRoute) {}

  /**
   * Returns a new copy of the recipes array.
   */
  getRecipes(): RecipeModel[] {
    return this.recipes.slice();
  }

  /**
   * Adds ingredients to the shopping list.
   * @param ingredients - array of objects {name: string, amount: number}
   */
  addIngredientsToShoppingList(ingredients: IngredientModel[]): void {
    this.shoppingListService.addIngredients(ingredients);
  }

  /**
   * Returns a recipe object {name: string, desc: string, imagePath: string, ingredients: IngredientModel[]} by its id.
   * @param id of a recipe - number.
   */
  getRecipe(id: number): RecipeModel {
    return this.recipes[id];
  }

  /**
   * Adds a new recipe into the recipes list and emits the list through the Subject observable.
   * @param recipe - object {name: string, desc: string, imagePath: string, ingredients: IngredientModel[]}
   */
  addRecipe(recipe: RecipeModel): void {
    this.recipes.push(recipe);
    this.emitRecipes();
  }

  /**
   * Updates the recipe by its index and emits the recipes list through the Subject observable.
   * @param index of the recipe - number.
   * @param newRecipe - object {name: string, desc: string, imagePath: string, ingredients: IngredientModel[]}
   */
  updateRecipe(index: number, newRecipe: RecipeModel): void {
    this.recipes[index] = newRecipe;
    this.emitRecipes();
  }

  /**
   * Removes a recipe from the list by its index.
   * @param index of the recipe - number.
   */
  deleteRecipe(index: number): void {
    this.recipes.splice(index, 1);
    this.emitRecipes();
  }

  /**
   * Just a shortcut to emit a list of recipes by a Subject Observable.
   */
  emitRecipes() {
    this.recipesChanged.next(this.recipes.slice());
  }
}
