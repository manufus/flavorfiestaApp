import { Component, OnInit, Input } from '@angular/core';
import { DataserviceService } from 'src/app/services/dataservice.service'; // Ensure this path matches where your DataService is located
import { Location } from '@angular/common'
@Component({
  selector: 'app-top-bar-no-filters',
  templateUrl: './top-bar-no-filters.component.html',
  styleUrls: ['./top-bar-no-filters.component.scss'],
})
export class TopBarNoFiltersComponent implements OnInit {
  @Input() showBackButton: boolean = false;
  @Input() title: string = '';  // Default title, can be overridden

  constructor(private dataService: DataserviceService, private location: Location) { }

  ngOnInit() {
    if (!this.title) {
      this.title = this.dataService.getTitle(); // Only fetch title if not provided
    }
  }
  back(): void {
    this.location.back()
  }
}