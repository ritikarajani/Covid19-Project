import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-allcountries',
  templateUrl: './allcountries.component.html',
  styleUrls: ['./allcountries.component.scss']
})
export class AllcountriesComponent implements OnChanges {
@Input() allCountriesData:any;
  constructor() { }

  ngOnChanges() {
 console.log(this.allCountriesData);
 this.allCountriesData.sort(
   (a:any,b:any)=>
   {
     return b.TotalConfirmed - a.TotalConfirmed;
   }
 );
 console.log(this.allCountriesData);
  }

}
