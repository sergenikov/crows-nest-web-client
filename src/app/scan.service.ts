import { BasicHTTPScannerService } from "./api-client/basic-httpscanner/basic-httpscanner.service";
import { ScanResult } from "./scan-result";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ScanService {
  constructor(private basicHttpScannerService: BasicHTTPScannerService) {}

  /**
   * Get placeholder scan information
   */
  getScans(): Observable<ScanResult[]> {
    return this.basicHttpScannerService.scanHosts([]);
  }

  /**
   * Scan a host
   * @param ip - string ip to scan. Can be either ip or hostname.
   */
  scanHost(ip: string): Observable<ScanResult> {
    return this.basicHttpScannerService.scanHost({ ip });
  }
}
