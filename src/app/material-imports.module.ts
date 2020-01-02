import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatTabsModule } from "@angular/material/tabs";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";

@NgModule({
  declarations: [],
  imports: [CommonModule, MatTabsModule, MatSidenavModule, MatToolbarModule],
  exports: [MatTabsModule, MatSidenavModule, MatToolbarModule]
})
export class MaterialImportsModule {}
