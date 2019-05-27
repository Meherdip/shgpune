import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrellorComponent } from './trellor/trellor.component';
import { CollectorComponent } from './emp/collector/collector.component';
import { MemeberRegComponent } from './emp/memeber-reg/memeber-reg.component';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { FormsModule }from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    TrellorComponent,
    CollectorComponent,
    MemeberRegComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDatepickerModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
