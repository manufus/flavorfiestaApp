import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/services/dataservice.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePage  implements OnInit {
  public segment: string = "feed";
  id : string=""
  person : any
  public arr = new Array(10);
  iterations: number[] = [];
  constructor(public dataService: DataserviceService, private route : ActivatedRoute) { }
  
  ngOnInit() {this.iterations = Array(10).fill(0).map((x, i) => i);
    console.log(this.francesco)
    this.route.params.subscribe(params => {
      this.id = params['id'];  // Capture the id from route
    });
    this.person = this.dataService.getPersonByid(parseInt(this.id))
    
  }

  data= this.dataService.data

  segmentChanged(ev: any) {
    this.segment = ev.detail.value;
  }
  
  francesco= this.dataService.getPeople("Francesco")[0]
  

}
