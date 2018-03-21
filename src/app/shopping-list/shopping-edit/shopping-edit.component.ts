import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.module';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('name') nameRef: ElementRef;
  @ViewChild('amount') amountRef: ElementRef;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddedItem() {
    const ingName = this.nameRef.nativeElement.value;
    const ingAmount = this.amountRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.slService.addIngredient(newIngredient);
  }

}
