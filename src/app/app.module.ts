import { InMemoryDataService } from "./in-memory-data.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ScanDashboardComponent } from "./scan-dashboard/scan-dashboard.component";
import { ScanResultComponent } from "./scan-result/scan-result.component";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, ScanDashboardComponent, ScanResultComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
