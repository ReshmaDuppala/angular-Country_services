import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { Country } from './country';
import { Countries } from './mock-country';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root',
})
export class CountryService {

  
  private _webApiUrl ='https://cdn.rawgit.com/arpitmandliya/AndroidRestJSONExample/master/countries.json'
  //constructor(private messageService: MessageService) { }
    constructor(private _http: Http){}
  
  getCountry(): Observable<Country[]> {
    // TODO: send the message _after_ fetching the heroes
    //this.messageService.add('CountryService: fetched countries');
      return this._http.get(this._webApiUrl)
            .map((response: Response) => <Country[]>response.json());
    return of(Countries);
  }

}


    
