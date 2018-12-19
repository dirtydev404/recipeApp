import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import {NgForm} from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slFrom: NgForm;
  subcription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editiedItem: Ingredient;


  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
   this.subcription = this.slService.startedEditing.subscribe((index: number) =>  {
      this.editedItemIndex = index;
      this.editMode = true;
      this.editiedItem = this.slService.getIngredient(index);
      this.slFrom.setValue({
        name: this.editiedItem.name,
        amount: this.editiedItem.amount
      })
   });
  }
  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    this.slService.addIngredient(newIngredient);
  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
  }

}
