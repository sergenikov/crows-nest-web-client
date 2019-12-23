export class ScanResult {
  details: string;

  constructor(details: string) {
    this.details = details;
  }

  getDetails(): string {
    return this.details;
  }
}
