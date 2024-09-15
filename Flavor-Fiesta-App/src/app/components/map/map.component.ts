import { Component, OnInit, OnDestroy, ViewChild, ElementRef, NgZone } from '@angular/core';
import * as L from 'leaflet';
import { DataserviceService } from 'src/app/services/dataservice.service'
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {
  @ViewChild('foodMap')
  foodMapContainer!: ElementRef;
  @ViewChild('experienceMap')
  experienceMapContainer!: ElementRef;
  @ViewChild('friendsMap')
  friendsMapContainer!: ElementRef;
  private foodMap!: L.Map;
  private friendsMap!: L.Map
  private experienceMap!: L.Map;
  private subscription!: Subscription;
  
  
  constructor(private dataService: DataserviceService, private router : Router , private ngZone: NgZone) {}

  ngOnInit(): void {
    setTimeout(() => this.foodMap.invalidateSize(true), 400);  // Ensures the DOM is fully ready
    setTimeout(() => this.friendsMap.invalidateSize(true), 400);  // Ensures the DOM is fully ready
    setTimeout(() => this.experienceMap.invalidateSize(true), 400);  // Ensures the DOM is fully ready

 

  }

  ngAfterViewInit() {
    this.initMaps();
    this.subscription = this.dataService.activeTab.subscribe(tab => {
      this.toggleMaps(tab);
      setTimeout(() => this.foodMap.invalidateSize(true), 400);  // Ensures the DOM is fully ready
    setTimeout(() => this.friendsMap.invalidateSize(true), 400);  // Ensures the DOM is fully ready
    setTimeout(() => this.experienceMap.invalidateSize(true), 400);  // Ensures the DOM is fully ready
    
    });
    
  }

  initMaps(): void {
    this.foodMap = this.createMap(this.foodMapContainer.nativeElement, [40.42745937895539, -3.706337305992216]);
    
    this.experienceMap = this.createMap(this.experienceMapContainer.nativeElement, [40.42745937895539, -3.706337305992216]);
    this.friendsMap = this.createMap(this.friendsMapContainer.nativeElement, [40.42745937895539, -3.706337305992216]);
   
    // Initialize markers for each map here or in separate methods
    for (let rest of this.dataService.data.restaurants) {
      let marker=L.marker([rest.coordinates[0],rest.coordinates[1]])
      marker.addTo(this.foodMap)
      
      marker.bindPopup(` <ng-container class="ion-justify-items-center">
      <ion-card>
        <img src=${rest.img} />
        <ion-card-header>
          <ion-card-title>${rest.name}</ion-card-title>
         
        </ion-card-header>
      
        <ion-card-content>
        ${rest.description}
        <ion-grid>
        <ion-row class="ion-justify-content-center">
       
        <ion-button id="detailButton" href="javascript:void(0);"   class= "ion-text-center ">
        See Details
        </ion-button>
       
        </ion-row>
        </ion-grid>
       
       
        </ion-card-content>
      </ion-card>
    </ng-container>`, { minWidth: 400, maxHeight: 400 })
    
     marker.on('popupopen', () => {
      document.getElementById('detailButton')!.addEventListener('click', () => {
        this.navigateToDetailPageRest(rest.id);
        console.log("popupopen",rest.id, this.router)
      });
    });
    }

    for (let exp of this.dataService.data.experiences) {
      let marker=L.marker([exp.coordinates[0],exp.coordinates[1]])
      marker.addTo(this.experienceMap)
      marker.bindPopup(` <ng-container class="ion-justify-items-center">
      <ion-card>
        <img src=${exp.img} />
        <ion-card-header>
          <ion-card-title>${exp.name}</ion-card-title>
         
        </ion-card-header>
      
        <ion-card-content>
        ${exp.descriptionSh}
        <ion-grid>
        <ion-row class="ion-justify-content-center">
        <ion-button id="detailExpButton" class= "ion-text-center ">
        See Details
        </ion-button>
        </ion-row>
        </ion-grid>
       
        </ion-card-content>
      </ion-card>
    </ng-container>`, { minWidth: 400, maxHeight: 400 })
    marker.on('popupopen', () => {
      document.getElementById('detailExpButton')!.addEventListener('click', () => {
        this.navigateToDetailPageExp(exp.id);
        console.log("popupopen",exp.id, this.router)
      });
     
    });
    }

    for (let pers of this.dataService.data.persons) {
      if (pers.reviews) {
        for (let rew of pers.reviews) {
          let marker=L.marker([rew.coordinates[0],rew.coordinates[1]])
      marker.addTo(this.friendsMap)
      marker.bindPopup(` <ng-container class="ion-justify-items-center">
      <ion-card>
        
        <ion-card-header>
          <ion-card-title>${rew.item} by ${pers.name}</ion-card-title>
          <ion-card-subtitle>${rew.date}</ion-card-title>
        </ion-card-header>
      
        <ion-card-content>
        ${rew.text}
        <ion-grid>
        <ion-row class="ion-justify-content-center">
        <ion-button id="detailPersButton"  class= "ion-text-center ">
        See Profile
        </ion-button>
        </ion-row>
        </ion-grid>
       
        </ion-card-content>
      </ion-card>
    </ng-container>`, { minWidth: 400, maxHeight: 400 })
    marker.on('popupopen', () => {
      document.getElementById('detailPersButton')!.addEventListener('click', () => {
        this.navigateToDetailPagePers(pers.id);
        console.log("popupopen",pers.id, this.router)
      });
    });
        }
      }
    }


  }
  navigateToDetailPageRest(id: number) {
   console.log("link", this.router)
      this.router.navigate(['/detailRest', id]);
  
  }
  navigateToDetailPageExp(id: number) {
    console.log("link", this.router)
       this.router.navigate(['/detailExp', id]);
   
   }
   navigateToDetailPagePers(id: number) {
    console.log("link", this.router)
       this.router.navigate(['/detailPers', id]);

   }

  createMap(element: string | HTMLElement, coords: L.LatLng | any): L.Map {
    const map = L.map(element, { center: coords, zoom: 16 });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    return map;
    
  }

  toggleMaps(activeTab: string): void {
    this.foodMapContainer.nativeElement.style.display = activeTab === 'food' ? 'block' : 'none';
    this.experienceMapContainer.nativeElement.style.display = activeTab === 'experience' ? 'block' : 'none';
    this.friendsMapContainer.nativeElement.style.display = activeTab === 'friends' ? 'block' : 'none';
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}






