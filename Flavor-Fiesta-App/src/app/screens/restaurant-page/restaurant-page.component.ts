import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataserviceService } from 'src/app/services/dataservice.service';  // Ensure correct path

@Component({
  selector: 'app-restaurant-page',
  templateUrl: './restaurant-page.component.html',
  styleUrls: ['./restaurant-page.component.scss']
})
export class RestaurantPageComponent implements OnInit {
  id: string = ""
  restaurant : any // Adjust the type based on your data model
  ingredients: any[] = [];  // Assuming type for ingredients
  comments: any[] = [];  // Initialize comments array to hold Comment objects
  selectedTab = 'menu';  // Default to showing the recipe tab
  data= this.dataService.data
  constructor(private dataService: DataserviceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];  // Capture the id from route
    });
    console.log(this.id)
   
    this.restaurant= this.dataService.getRestById( parseInt(this.id)) // Adjust the type based on your data model
  
    this.loadIngredients();
    this.loadComments();
  }
  ngAfterViewInit(): void {
   
   
  }



  loadIngredients(): void {
    const ingredients = this.dataService.getIngredients();  // Assuming this returns an array directly
    this.ingredients = ingredients;  // Directly assign the array to the component property
  }

  loadComments(): void {
    const comments = this.dataService.getComments();  // Assuming this returns an array directly
    this.comments = comments;  // Correctly assign the array to the comments property
  }
  
}

