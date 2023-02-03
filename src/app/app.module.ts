import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{childcomponent} from './childcomponent/child.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    childcomponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
