import { Observable } from "rxjs";
import { ScanResult } from "../scan-result";
import { ScanRequest } from "./scan-request";

export interface ScannerApi {
  scanHost(scanRequest: ScanRequest): Observable<ScanResult>;
  scanHosts(scanRequests: ScanRequest[]): Observable<ScanResult[]>;
}
