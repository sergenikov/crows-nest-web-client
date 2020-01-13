import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialImportsModule } from "./../material-imports.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ScanResultComponent } from "./scan-result/scan-result.component";
import { ScanResultHolderComponent } from "./scan-result-holder/scan-result-holder.component";
import { HostInputFormComponent } from "./host-input-form/host-input-form.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    ScanResultComponent,
    ScanResultHolderComponent,
    HostInputFormComponent
  ],
  imports: [
    CommonModule,
    MaterialImportsModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  exports: [ScanResultHolderComponent, ScanResultComponent]
})
export class NmapScanModule {}
