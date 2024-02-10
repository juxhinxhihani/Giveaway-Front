import {ApplicationConfig, NgModule} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {AppComponent} from "./app.component";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {TooltipModule} from "ngx-bootstrap/tooltip";
import {ModalModule} from "ngx-bootstrap/modal";
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
  declarations:[],
  providers:[],
  imports: [
    BrowserModule,
    ModalModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule{

}
