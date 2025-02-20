import { NgModule } from "@angular/core";
import { ValidationMessageComponent } from "./validation-message/validation-message.component";
import { TranslateModule } from "@ngx-translate/core";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    ValidationMessageComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    ValidationMessageComponent
  ]
})
export class SharedModule { }