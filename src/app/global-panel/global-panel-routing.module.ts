import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlobalPanelShellComponent } from './global-panel-shell/global-panel-shell.component';

const routes: Routes = [
  {
    path: '',
    component: GlobalPanelShellComponent,
    // children: [
    //   {
    //     path:'create',
    //     component: FarmerCreateEditComponent
    //   },
    //   {
    //     path: 'edit/:farmerId',
    //     component: FarmerCreateEditComponent
    //   },
    //   {
    //     path: 'view/:farmerId',
    //     component: FarmerViewShellComponent
    //   }
    // ]   
  },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlobalPanelRoutingModule { }