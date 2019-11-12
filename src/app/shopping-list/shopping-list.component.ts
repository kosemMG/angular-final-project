import {Component, OnDestroy, OnInit} from '@angular/core';
import {IngredientModel} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: IngredientModel[];
  private ingredientsChangedSubscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingredientsChangedSubscription = this.shoppingListService.ingredientsChanged
      .subscribe(
        (ingredients: IngredientModel[]) => {
          this.ingredients = ingredients;
        }
      );
    // TODO write some logic to check if an item has been already added to the list and group it by name
  }

  ngOnDestroy(): void {
    this.ingredientsChangedSubscription.unsubscribe();
  }

  onEditItem(index: number): void {
    this.shoppingListService.startedEditing.next(index);
  }
}
