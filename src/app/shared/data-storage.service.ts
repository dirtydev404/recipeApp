import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { map } from 'rxjs/operators';


@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) { }
    storeRecipes() {
     return this.http.put('https://ng-recipe-app-afbb1.firebaseio.com/recipes.json',
      this.recipeService.getRecipes());
    }

    getRecipes() {
      this.http.get('https://ng-recipe-app-afbb1.firebaseio.com/recipes.json')
      .pipe(map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for ( let recipe of recipes) {
            if (!recipe[ 'ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      ))
        .subscribe((recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        });
    }
}
