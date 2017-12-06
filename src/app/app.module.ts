import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { DefferenceComponent } from './defference/defference.component';

import { DataService } from './data.service'

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    DefferenceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
