import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ApiService } from '../services/api.service';
import { TopbarComponent } from './topbar/topbar.component';
import { CrudComponent } from "./crud/crud.component";

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
