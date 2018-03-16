import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule } from './/app-routing.module';

import { TromboneService } from "./trombone.service";

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { TromboneDetailComponent } from './trombone-detail/trombone-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TromboneSearchComponent } from './trombone-search/trombone-search.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TromboneDetailComponent,
    DashboardComponent,
    TromboneSearchComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
    TromboneService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
