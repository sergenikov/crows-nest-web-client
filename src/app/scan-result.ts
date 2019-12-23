export class ScanResult {
  id: number;
  details: string;

  constructor(id: number, details: string) {
    this.id = id;
    this.details = details;
  }

  getDetails(): string {
    return this.details;
  }
}
