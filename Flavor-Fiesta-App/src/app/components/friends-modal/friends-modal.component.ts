import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataserviceService } from 'src/app/services/dataservice.service'

@Component({
  selector: 'app-friends-modal',
  templateUrl: './friends-modal.component.html',
  styleUrls: ['./friends-modal.component.scss'],
})
export class FriendsModalComponent  implements OnInit {
  isModalOpen = false;
  activeTab : any
  constructor(private modalController: ModalController, private dataService : DataserviceService) {
    this.dataService.activeTab.subscribe(tab => {
      this.activeTab = tab;  // Listen to changes in the active tab
    });
   }
  @Input() searchResults : any = {}
  

  ngOnInit() {
    console.log(this.searchResults)
  }

  log(log : any) {
    console.log(log)
  }
 


   dismissModal() {
    this.modalController.dismiss();
  }
  
}
