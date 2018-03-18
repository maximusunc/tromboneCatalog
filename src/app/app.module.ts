import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule } from './/app-routing.module';

import { TromboneService } from "./trombone.service";

import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { TromboneDetailComponent } from './trombone-detail/trombone-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TromboneSearchComponent } from './trombone-search/trombone-search.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { TromboneMakerComponent } from './trombone-maker/trombone-maker.component';
import { TromboneTypeComponent } from './trombone-type/trombone-type.component';
import { ConstructionComponent } from './construction/construction.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    TromboneDetailComponent,
    DashboardComponent,
    TromboneSearchComponent,
    MessagesComponent,
    TromboneMakerComponent,
    TromboneTypeComponent,
    ConstructionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatSelectModule,
    BrowserAnimationsModule,
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
