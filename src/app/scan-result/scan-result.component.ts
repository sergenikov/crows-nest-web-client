import { Component, OnInit, Input } from "@angular/core";
import { ScanResult } from "../scan-result";

@Component({
  selector: "app-scan-result",
  templateUrl: "./scan-result.component.html",
  styleUrls: ["./scan-result.component.css"]
})
export class ScanResultComponent implements OnInit {
  @Input() scan: ScanResult;

  constructor() {}

  ngOnInit() {}
}
