import {Recipe} from './recipe.model';
import {  Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Dinner',
    'This is a test',
    'https://akispetretzikis.com/system/uploads/medium/data/12557/recipe_main_mydia_pane.jpg',
    [
      new Ingredient('Meat', 1),
      new Ingredient('Fries', 10)
    ]),
    new Recipe('Sandwich',
    'This is a testof2',
    'https://akispetretzikis.com/system/uploads/medium/data/12557/recipe_main_mydia_pane.jpg',
    [
      new Ingredient('Bread', 2),
      new Ingredient('Beer', 30)
    ])
  ];

constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
