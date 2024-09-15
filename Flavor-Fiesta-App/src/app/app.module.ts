import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Import FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { ProfilePage } from './screens/profile-page/profile-page.component';
import { DishPageComponent } from './screens/dish-page/dish-page.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { TopBarNoFiltersComponent } from './components/top-bar-no-filters/top-bar-no-filters.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { CardDetailComponent } from './components/card-detail/card-detail.component';
import { TabDetailComponent } from './components/tab-detail/tab-detail.component';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';
import { MapComponent } from './components/map/map.component';import {FriendsModalComponent} from './components/friends-modal/friends-modal.component'
import { ExperiencePageComponent } from './screens/experience-page/experience-page.component';
import { RestaurantPageComponent } from './screens/restaurant-page/restaurant-page.component';
import { IngredientPageComponent } from './screens/ingredient-page/ingredient-page.component';
import { HomepageComponent } from './screens/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilePage,
    TopBarComponent,
    SearchbarComponent,
    CardDetailComponent,
    TabDetailComponent,
    BottomSheetComponent,
    MapComponent,
    DishPageComponent,
    TopBarNoFiltersComponent,
    FriendsModalComponent,
    ExperiencePageComponent,
    RestaurantPageComponent,
    IngredientPageComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot({}),
    FormsModule  // Add FormsModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
