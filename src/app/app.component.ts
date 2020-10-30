import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  globalData:any={};
  allCountriesData:any=[];
  INData:any={};
  constructor(public http: HttpClient){
    this.http
    .get("https://api.covid19api.com/summary")
    .subscribe(
    (value:any) => {
    this.globalData=value.Global;
    this.allCountriesData=value.Countries;
    // console.log(this.allCountriesData);

    this.allCountriesData.forEach(countryList => {
      if(countryList.CountryCode=="IN"){
        // console.log(this.INData=countryList);
       this.INData=countryList;
      }
      
    });
    });

  }
  title = 'covidapp';
}
