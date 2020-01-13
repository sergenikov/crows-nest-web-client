import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-host-input-form",
  templateUrl: "./host-input-form.component.html",
  styleUrls: ["./host-input-form.component.css"]
})
export class HostInputFormComponent implements OnInit {
  scanForm: FormGroup;

  constructor() {
    this.scanForm = new FormGroup({
      host: new FormControl("", Validators.required)
    });
  }

  ngOnInit() {}

  scan() {
    console.warn(this.scanForm.value.host);
  }

  onSubmit() {
    this.scan();
  }

  updateHost() {
    this.scanForm.value.host = "yandex.com";
  }
}
