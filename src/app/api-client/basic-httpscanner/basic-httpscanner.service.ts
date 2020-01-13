import { ScannerApi } from "./../scanner.api";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { ScanRequest } from "../scan-request";
import { ScanResult } from "src/app/scan-result";
import { handleError } from "../handle-error.fn";

@Injectable({
  providedIn: "root"
})
export class BasicHTTPScannerService implements ScannerApi {
  private api: string = "http://localhost:8080/api/v1/asyncscan";
  private apiScans: string = "http://localhost:8080/api/v1/scans";

  constructor(private http: HttpClient) {}

  /**
   * Scan a host
   * @param ip - string ip to scan. Can be either ip or hostname.
   */
  scanHost(scanRequest: ScanRequest): Observable<ScanResult> {
    console.log(
      `BasicHttpScannerService: scanning ${JSON.stringify(scanRequest)}`
    );

    return this.http.post<ScanResult>(this.api, scanRequest).pipe(
      tap(_ =>
        console.log(
          `BasicHttpScannerService: got scan result: ${JSON.stringify(_)}`
        )
      ),
      catchError(handleError<ScanResult>("failed to get scan info"))
    );
  }

  /**
   * Get placeholder scan information
   */
  scanHosts(scanRequests: ScanRequest[]): Observable<ScanResult[]> {
    return this.http.get<ScanResult[]>(this.apiScans).pipe(
      tap(_ => console.log(`BasicHttpScannerService: got scan results: ${_}`)),
      catchError(handleError<ScanResult[]>("failed to get scan info", []))
    );
  }
}
