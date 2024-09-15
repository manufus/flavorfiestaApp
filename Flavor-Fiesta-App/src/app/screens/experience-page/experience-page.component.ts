import { Component, OnInit } from '@angular/core';
import { DataserviceService, Experience } from 'src/app/services/dataservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrls: ['./experience-page.component.scss'],
})
export class ExperiencePageComponent implements OnInit {
  experience : any


  //experience?: Experience; // Use optional to handle potential absence initially
  selectedTab: string = 'details'; // Default tab
  plate: any
  comments:any
  id : string =""

  constructor(private dataService: DataserviceService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];  // Capture the id from route
    });
    this.experience= this.dataService.getExperienceById(parseInt(this.id))
    this.plate = this.dataService.getDishById(1)
    this.comments= this.dataService.getComments()
  }

  
}