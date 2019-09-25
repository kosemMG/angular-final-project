import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RecipeModel} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: RecipeModel[] = [
    new RecipeModel('Hamburger', 'A delicious, juicy burger. Just eat me!',
      'https://assets3.thrillist.com/v1/image/2797371/size/tl-horizontal_main_2x.jpg'),
    new RecipeModel('Apple', 'A red, sweet apple. Just eat me!',
      'https://i5.walmartimages.ca/images/Large/094/514/6000200094514.jpg')
  ];

  @Output() recipeSelected = new EventEmitter<RecipeModel>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: RecipeModel) {
    this.recipeSelected.emit(recipe);
  }
}
