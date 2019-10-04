import {RecipeModel} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {IngredientModel} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {ActivatedRoute} from '@angular/router';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<RecipeModel>();

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
  ) {}

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
}
