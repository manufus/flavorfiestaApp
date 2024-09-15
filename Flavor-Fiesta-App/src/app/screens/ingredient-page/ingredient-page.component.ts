import { Component, OnInit } from '@angular/core';
import { DataserviceService, } from 'src/app/services/dataservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ingredient-page',
  templateUrl: './ingredient-page.component.html',
  styleUrls: ['./ingredient-page.component.scss'],
})
export class IngredientPageComponent implements OnInit {
  id : string= ""
  dishes: any[] = [];  // Array to store dishes
  restaurants: any[] = [];  // Array to store restaurants
  ingredient: any  // Optional to handle cases where ingredient might not exist
  comments: any[] = [];  // Initialize comments array to hold Comment objects
  selectedTab = 'recipes';  // Default to showing the recipe tab
  title: string = '';  // Initialize title for use in the top bar
  data= this.dataService.data

  constructor(private dataService: DataserviceService, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];  // Capture the id from route
    });
    this.ingredient= this.dataService.getIngredientById(parseInt(this.id))
     // Optional to handle cases where ingredient might not exist

    this.loadRestaurants();
    this.loadComments();

    this.loadDishes();  // Make sure to call this method to load dishes
  }

  loadRestaurants(): void {
    this.restaurants = this.dataService.getRestaurants();  // Fetch all restaurants
  }

 

  loadComments(): void {
    const comments = this.dataService.getComments();  // Fetch all comments
    this.comments = comments;  // Assign comments to the property
  }
  
  loadDishes(): void {
    this.dishes = this.dataService.getPlates();  // Fetch all dishes
  }
}
