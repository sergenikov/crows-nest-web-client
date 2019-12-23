import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const scans = [
      {
        details: `
      Starting Nmap 7.80 ( https://nmap.org ) at 2019-12-22 21:24 PST
      Nmap scan report for 192.168.0.1
      Host is up (0.0032s latency).
      Not shown: 996 closed ports
      PORT     STATE    SERVICE
      22/tcp   filtered ssh
      23/tcp   filtered telnet
      80/tcp   open     http
      8080/tcp open     http-proxy
      MAC Address: 1C:1B:68:97:09:CD (Arris Group)

      Nmap done: 1 IP address (1 host up) scanned in 1.53 seconds
      `
      },
      {
        details: `
      Starting Nmap 7.80 ( https://nmap.org ) at 2019-12-22 21:25 PST
      Nmap scan report for 192.168.0.4
      Host is up (0.000010s latency).
      All 1000 scanned ports on 192.168.0.4 are closed
      
      Nmap done: 1 IP address (1 host up) scanned in 0.21 seconds
      `
      }
    ];

    return { scans };
  }

  get() {
    return;
  }
}
