import { Component, OnInit } from '@angular/core';

import { Country } from '../country';
import { CountryService } from '../country.service';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
 selectedCountry: Country;  
 countries: Country[];
  constructor(private countryService: CountryService) { }

  ngOnInit() {
     this.getCountry();
  console.log('ngOnInit')
  
  }
   onSelect(country: Country): void {
    this.selectedCountry = country;
  }

  getCountry(): void {
    this.countryService.getCountry()
        .subscribe((country) => {
          
          
          this.countries = country
          console.log(this.countries)
          
          });
  }

}