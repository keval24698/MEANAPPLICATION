import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllListingComponent } from './all-listing/all-listing.component';
import { HttpClientModule} from '@angular/common/http';
import { ListDetailComponent } from './list-detail/list-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    AllListingComponent,
    ListDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
