import { Component, OnInit } from "@angular/core";
import { ScanResult } from "../../scan-result";
import { ScanService } from "../../scan.service";

@Component({
  selector: "app-scan-result-holder",
  templateUrl: "./scan-result-holder.component.html",
  styleUrls: ["./scan-result-holder.component.css"]
})
export class ScanResultHolderComponent implements OnInit {
  scans: ScanResult[];
  scan: ScanResult;

  constructor(private scanService: ScanService) {}

  ngOnInit() {
    this.getScans();
    this.scanHost("192.168.1.23");
  }

  /**
   * Scan a single host and return scan result
   * @param host to scan
   */
  scanHost(host: string): void {
    this.scanService.scanHost(host).subscribe(scan => {
      console.log(`scan host result ${scan}`);
      this.scan = scan;
    });
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
