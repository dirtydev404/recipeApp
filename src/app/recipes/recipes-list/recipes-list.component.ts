import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test', 'This is a test', 'https://akispetretzikis.com/system/uploads/medium/data/12557/recipe_main_mydia_pane.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

    onRecipeSelected(recipe: Recipe) {
      this.recipeWasSelected.emit(recipe);
    }
}
