import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

/**
 * Module used to connect to the API. Must be the sole mean to communicate
 * with the API.
 * // TODO think about moving it out of app module entirely
 */
@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule]
})
export class ApiClientModule {}
