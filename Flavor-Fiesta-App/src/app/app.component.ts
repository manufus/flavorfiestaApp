import { Component,OnInit } from '@angular/core';
import { DataserviceService } from '../app/services/dataservice.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Flavor-Fiesta-App';
  data = this.dataService.data;
 
 

  constructor (private dataService: DataserviceService, public router: Router) {}
  ngOnInit(): void {
   
  }

  log(log : any) : void {
    console.log(log);
  }
}
