import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-detail',
  templateUrl: './tab-detail.component.html',
  styleUrls: ['./tab-detail.component.scss'],
})
export class TabDetailComponent  implements OnInit {
  public segment: string = "info";
  public arr = new Array(10);
  constructor() { }

  ngOnInit() {}
  

  segmentChanged(ev: any) {
    this.segment = ev.detail.value;
  }
}
