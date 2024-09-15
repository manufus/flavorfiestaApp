import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { DataserviceService } from 'src/app/services/dataservice.service'


@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss'],
})
export class BottomSheetComponent  implements OnInit {
  allReviews: any[] = [];
  activeTab: string | undefined;
  private subscription: Subscription = new Subscription; 


  constructor(private dataService: DataserviceService, private modalCtrl: ModalController ) { }

  ngOnInit() { this.allReviews = this.dataService.getAllReviews();
    this.subscription = this.dataService.activeTab.subscribe(tab => {
      this.activeTab = tab;
    
    });
  }
  data = this.dataService.data

log(log: any) {
console.log(log)
}
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
