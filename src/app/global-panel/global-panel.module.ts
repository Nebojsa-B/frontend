import { NgModule } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { CommonModule } from "@angular/common";
import { GlobalPanelShellComponent } from "./global-panel-shell/global-panel-shell.component";
import { GlobalPanelRoutingModule } from "./global-panel-routing.module";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { GlobalPanelChartsComponent } from "./global-panel-charts/global-panel-charts.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgApexchartsModule } from "ng-apexcharts";
import { SharedDataAccessUserModule } from "../shared/data-access/store/user/shared-data-access-user.module";


@NgModule({
  declarations: [
    GlobalPanelShellComponent,
    GlobalPanelChartsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    NgApexchartsModule,
    GlobalPanelRoutingModule,
    SharedDataAccessUserModule
  ]
})
export class GlobalPanelModule { }