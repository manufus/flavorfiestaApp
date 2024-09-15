import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './screens/homepage/homepage.component';
import { RestaurantPageComponent } from './screens/restaurant-page/restaurant-page.component';
import { ExperiencePageComponent } from './screens/experience-page/experience-page.component';
import { ProfilePage } from './screens/profile-page/profile-page.component';
import { DishPageComponent } from './screens/dish-page/dish-page.component';
import { IngredientPageComponent } from './screens/ingredient-page/ingredient-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'detailRest/:id', component: RestaurantPageComponent },
  { path: 'detailExp/:id', component: ExperiencePageComponent },
  { path: 'detailPers/:id', component: ProfilePage },
  { path: 'detailDish/:id', component: DishPageComponent },
  { path: 'detailIngr/:id', component: IngredientPageComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
