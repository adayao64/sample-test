import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PictureComponentComponent } from './picture-component/picture-component.component';
import {AppRoutingModule} from './app.routing.module';
import {HttpClientModule} from '@angular/common/http';
import { PictureServiceService } from './picture-service.service';

@NgModule({
  declarations: [
    AppComponent,
    PictureComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PictureServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
