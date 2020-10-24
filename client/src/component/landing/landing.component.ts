import { Component, OnInit, ViewChild } from '@angular/core';
import { DataServiceService } from 'src/services/data-service.service';
import { MapComponent } from '../map/map.component';
interface dataModel{
  state:string,
  districts:[]
}
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  @ViewChild('mapComponent') mapComponent : MapComponent;

stateCityData : dataModel[];
cities : any[]=[];
  constructor( private _dataService : DataServiceService) { }

  ngOnInit(): void {
 
    this._dataService.getStates().subscribe((data:any)=>{
     
this.stateCityData = data.states;
this.setCityData(this.stateCityData[0].state);
console.log(this.stateCityData);
    })
  }
  setCityData(stateName : string){
this.cities = this.stateCityData.find((a:any)=> a.state == stateName).districts;
  }

  getLatLng(cityName :string){
this.mapComponent.getLatLng(cityName);
  }

}
