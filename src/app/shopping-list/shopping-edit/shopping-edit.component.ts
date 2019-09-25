import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {IngredientModel} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<IngredientModel>();
  @ViewChild('nameInput', {static: false}) ingredientName: ElementRef;
  @ViewChild('amountInput', {static: false}) ingredientAmount: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  onAdd() {
    const ingredientName = this.ingredientName.nativeElement.value;
    const ingredientAmount = this.ingredientAmount.nativeElement.value;
    const ingredient = new IngredientModel(ingredientName, ingredientAmount);

    this.ingredientAdded.emit(ingredient);
    this.onClearField();
  }

  onClearField() {
    this.ingredientName.nativeElement.value = '';
    this.ingredientAmount.nativeElement.value = '';
  }
}
