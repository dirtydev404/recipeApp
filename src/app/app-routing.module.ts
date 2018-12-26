import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './home/home.component';

const AppRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'shopping-list', component: ShoppingListComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
