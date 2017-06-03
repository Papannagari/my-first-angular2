import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {SampleComponent} from './sample.component';

@NgModule({
    imports :[
      BrowserModule,
      FormsModule
    ],
    declarations : [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SampleComponent
    ],
    bootstrap : [AppComponent]
})

export class AppModule{

}