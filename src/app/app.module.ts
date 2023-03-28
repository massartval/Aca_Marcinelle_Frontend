import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './components/person/person.component';
import { TableComponent } from './components/table/table.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { HomeComponent } from './pages/home/home.component';
import { PersonTableComponent } from './components/tables/person-table/person-table.component';

@NgModule({
  declarations: [
    AppComponent, 
    PersonComponent, 
    TableComponent, 
    BrowseComponent, 
    HomeComponent, 
    PersonTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    
    NgbModule,

    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

