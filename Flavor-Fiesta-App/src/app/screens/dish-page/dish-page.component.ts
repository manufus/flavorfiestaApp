import { Component, OnInit } from '@angular/core';
import { DataserviceService,Dish,Comment } from 'src/app/services/dataservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dish-page',
  templateUrl: './dish-page.component.html',
  styleUrls: ['./dish-page.component.scss'],
})
export class DishPageComponent implements OnInit {
  id: string =""
  currentDish?: Dish; // Assuming 'Dish' is an interface representing the dish data structure
  selectedTab = 'recipe';  // Default to showing the recipe tab
  restaurants: any = [];  // To hold restaurant data
  filteredRestaurants: any = [];
  selectedFilter = 'relevance';  // Default to relevance
  comments: Comment[] = [];

  item: any;       // For main dish details
  items: any[] = [];  // Initialize as empty array to avoid TypeScript errors
  steps: any[] = [];  // Initialize as empty array

  constructor(private dataService: DataserviceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];  // Capture the id from route
    });
    // Synchronously fetching the dish detail by ID, assuming the ID is known and static
    this.item = this.dataService.getItemById('plates', parseInt(this.id));
    
    this.comments = this.dataService.getComments(); // Fetch comments from the service
    if (this.item) {
      // If items and steps are part of the dish object, handle them accordingly
      this.items = this.item.items || []; // Default to empty array if not present
      this.steps = this.item.steps || []; // Default to empty array if not present
    }
    this.currentDish = this.dataService.getPlates()[0];  // Assuming getPlates() returns Dish[]

    this.restaurants = this.dataService.getRestaurants();
    this.filterRestaurants();

    //*******DOUBTFUL CODE********
    // Assume you fetch the dish data based on an ID or other parameter
    this.fetchDishDetails(1);  // Fetch the first dish for demonstration
    this.restaurants = this.dataService.getRestaurants(); // Fetch all restaurants
  }

  
  // Method to fetch dish details, example with a fixed ID, modify as necessary
  fetchDishDetails(dishId: number) {
    const dish = this.dataService.getItemById('plates', dishId);
    if (dish) {
      this.currentDish = dish as Dish;  // Ensure casting if necessary, depends on service implementation
    }
  }
  filterRestaurants() {
    if (this.selectedFilter === 'topRated') {
      // Sort by rating, highest first
      this.filteredRestaurants = [...this.restaurants].sort((a, b) => b.rating - a.rating);
    } else if (this.selectedFilter === 'trending') {
      // Randomly shuffle the array for the 'trending' filter
      this.filteredRestaurants = [...this.restaurants].sort(() => Math.random() - 0.5);
    } else {
      // 'Relevance' should retain the original order, so reset it to the initial array
      this.filteredRestaurants = [...this.restaurants];
    }
  }
  
}