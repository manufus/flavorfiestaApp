import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/services/dataservice.service'


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent  implements OnInit {
  searchbar : boolean ;
  public segment: string;

  constructor(private dataService :  DataserviceService) {this.searchbar= true
    this.segment = "food"
  }

  ngOnInit() { }

  onTabChange(tabId: string) {
    this.dataService.changeTab(tabId);
  }

  onSearchChange(event: any) {
    console.log('Searching for:', event.detail.value);
    // Implement your search logic here
  }

  setSearchbar(bool: boolean) {
    if (bool == false) {
      this.searchbar=false;
    }
    else {
      this.searchbar=true;
    }
  }
  segmentChanged(ev: any) {
    this.segment = ev.detail.value;
  }

}
