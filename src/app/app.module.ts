import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { Child1Component} from './child1/child1.component';
import { Child2Component} from './child2/child2.component';
import { Child3Component} from './child3/child3.component';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component, Child2Component, Child3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
