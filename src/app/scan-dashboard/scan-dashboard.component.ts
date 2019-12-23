import { ScanResult } from "./../scan-result";
import { ScanService } from "./../scan.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-scan-dashboard",
  templateUrl: "./scan-dashboard.component.html",
  styleUrls: ["./scan-dashboard.component.css"]
})
export class ScanDashboardComponent implements OnInit {
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
