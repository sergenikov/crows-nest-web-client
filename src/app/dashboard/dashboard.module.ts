import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialImportsModule } from "./../material-imports.module";
import { ScanDashboardComponent } from "./scan-dashboard/scan-dashboard.component";
import { NmapScanModule } from "./../nmap-scan/nmap-scan.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [ScanDashboardComponent],
  imports: [
    CommonModule,
    NmapScanModule,
    MaterialImportsModule,
    FlexLayoutModule
  ],
  exports: [ScanDashboardComponent]
})
export class DashboardModule {}
