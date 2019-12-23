import { ScanResult } from "./scan-result";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { tap, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ScanService {
  private scanUrl = "api/scans";

  constructor(private http: HttpClient) {}

  /**
   * Get scan information
   * // TODO we woudl pass params to this method where param is the
   * IP of the target to be scanned.
   */
  getScans(): Observable<ScanResult[]> {
    return this.http.get<ScanResult[]>(this.scanUrl).pipe(
      tap(_ => console.log(`ScanService: got scan results: ${_}`)),
      catchError(this.handleError<ScanResult[]>("failed to get scan info", []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
