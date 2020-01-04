import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialImportsModule } from "./../material-imports.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ScanResultComponent } from "./scan-result/scan-result.component";
import { ScanResultHolderComponent } from "./scan-result-holder/scan-result-holder.component";

@NgModule({
  declarations: [ScanResultComponent, ScanResultHolderComponent],
  imports: [CommonModule, MaterialImportsModule, FlexLayoutModule],
  exports: [ScanResultHolderComponent, ScanResultComponent]
})
export class NmapScanModule {}
