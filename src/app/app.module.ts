import { InMemoryDataService } from "./in-memory-data.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ScanDashboardComponent } from "./scan-dashboard/scan-dashboard.component";
import { ScanResultComponent } from "./scan-result/scan-result.component";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { AppRoutingModule } from "./app-routing.module";
import { MaterialImportsModule } from "./material-imports.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ScanResultHolderComponent } from "./scan-result-holder/scan-result-holder.component";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [
    AppComponent,
    ScanDashboardComponent,
    ScanResultComponent,
    ScanResultHolderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
