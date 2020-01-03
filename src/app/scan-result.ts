export class ScanResult {
  id: number;
  ip: string;
  details: string;

  constructor(id: number, details: string, ip: string) {
    this.id = id;
    this.details = details;
    this.ip = ip;
  }

  getDetails(): string {
    return this.details;
  }
}
