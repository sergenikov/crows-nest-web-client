import { Component, OnInit } from "@angular/core";
import { ScanResult } from "../scan-result";
import { ScanService } from "../scan.service";

@Component({
  selector: "app-scan-result-holder",
  templateUrl: "./scan-result-holder.component.html",
  styleUrls: ["./scan-result-holder.component.css"]
})
export class ScanResultHolderComponent implements OnInit {
  scans: ScanResult[];

  constructor(private scanService: ScanService) {}

  ngOnInit() {
    this.getScans();
  }

  /**
   * Fetch scans for rendering
   */
  getScans(): void {
    this.scanService.getScans().subscribe(scans => {
      console.log("scans retrieved", scans);
      this.scans = scans;
    });
  }
}
