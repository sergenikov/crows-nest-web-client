import { Component, OnInit } from "@angular/core";
import { ScanResult } from "../../scan-result";
import { ScanService } from "../../scan.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-scan-result-holder",
  templateUrl: "./scan-result-holder.component.html",
  styleUrls: ["./scan-result-holder.component.css"]
})
export class ScanResultHolderComponent implements OnInit {
  scanResult: ScanResult;
  scanForm: FormGroup;

  constructor(private readonly scanService: ScanService) {
    this.scanForm = new FormGroup({
      host: new FormControl("", Validators.required)
    });
  }

  ngOnInit() {}

  /**
   * Scan a single host and return scan result
   * @param host to scan
   */
  scan(): void {
    console.log("scanning ${host}");
    this.scanService.scanHost(this.scanForm.value.host).subscribe(scan => {
      console.log(`scan host result ${scan}`);
      this.scanResult = scan;
    });
  }

  onSubmit() {
    this.scan();
  }

  // /**
  //  * Fetch scans for rendering
  //  */
  // getScans(): void {
  //   this.scanService.getScans().subscribe(scans => {
  //     console.log("scans retrieved", scans);
  //     this.scans = scans;
  //   });
  // }
}
