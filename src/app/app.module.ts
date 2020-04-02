import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
//import { HelloComponent } from './hello.component';
import { CountryService } from './country.service';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { CountryComponent } from './country/country.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, CountryDetailsComponent, CountryComponent, MessagesComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CountryService, MessageService
  ]
})
export class AppModule { }
