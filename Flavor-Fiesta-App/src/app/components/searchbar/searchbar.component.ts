import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FriendsModalComponent } from '../friends-modal/friends-modal.component';
import { DataserviceService } from 'src/app/services/dataservice.service'

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent  implements OnInit {
  searchTerm: string = '';
  searchResults: any = {};
  activeTab: string = 'food';  // Default tab

  constructor(private modalController: ModalController,
    private dataService: DataserviceService) { 
      this.dataService.activeTab.subscribe(tab => {
        this.activeTab = tab;  // Listen to changes in the active tab
      });
    }

  ngOnInit() {}

  onSearchChange(event: any) {
    console.log('Searching for:', event.detail.value);
    // Implement your search logic here
  }
  async performSearch() {
    
    console.log(this.searchTerm)
    if (this.searchTerm) {
      this.searchResults = this.dataService.search(this.searchTerm,this.activeTab)
      console.log(this.searchResults);
      const modal = await this.modalController.create({
        component: FriendsModalComponent,
        componentProps: { searchResults: this.searchResults }
  
      });
      await modal.present();
    }
  }

}
