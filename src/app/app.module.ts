import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ShowComponent } from './Show/show.component';
import { HomeComponent } from './Home/home.component';
import { CreateComponent } from './Create/create.component';
import { DetailComponent } from './Detail/detail.component';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShowComponent,
    CreateComponent,
    DetailComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
