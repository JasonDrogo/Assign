import { } from "googlemaps";
import { Component, OnInit, ViewChild } from '@angular/core';
import { DataServiceService } from 'src/services/data-service.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @ViewChild("map", { static: true }) mapElement: any;
  map : google.maps.Map;
  
  
  constructor(private _dataService : DataServiceService) { }

  mapProperties:any= {};

  ngOnInit(): void {
    this.mapProperties = {
      center: new google.maps.LatLng(22.4674, 78.4346),
      zoom: 5,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map( //defining map
      this.mapElement.nativeElement,
      this.mapProperties
    );
  }

  getLatLng = (city: string) => {

    //getting latlng from google geocode api to mark that place
    this._dataService.getLatLng(city).subscribe(
        (data: any) => {

          const position = new google.maps.LatLng(
            data.results[0].geometry.location.lat,
            data.results[0].geometry.location.lng
          );
          let marker = new google.maps.Marker({
            //setting marker and info
            position,
            title:
              city +
              " " +
              "lat:" +
              data.results[0].geometry.location.lat +
              " " +
              "lng:" +
              data.results[0].geometry.location.lng
          });
          marker.setMap(this.map);
        },
        err => console.log("city name is not correct")
      );
  };
 

}
