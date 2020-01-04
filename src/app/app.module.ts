import { InMemoryDataService } from "./in-memory-data.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DashboardModule } from "./dashboard/dashboard.module";
import { ApiClientModule } from './api-client/api-client.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashboardModule,
    ApiClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
