import {Component} from '@angular/core';
import {RecipeModel} from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html'
})
export class RecipesComponent {
  recipe: RecipeModel;

  onRecipeSelected(recipe: RecipeModel) {
    this.recipe = recipe;
  }
}
