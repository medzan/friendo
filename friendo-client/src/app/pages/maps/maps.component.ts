import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
 lat = 13;
  lng = 80;
    lat2 = 14;
  lng2 = 81;
  constructor() { }

  ngOnInit() {
   
  }

}
