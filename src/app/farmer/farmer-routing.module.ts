import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmerShellComponent } from './farmer-shell/farmer-shell.component';
import { FarmerCreateEditComponent } from './farmer-create-edit/farmer-create-edit.component';
import { FarmerViewShellComponent } from './farmer-view-shell/farmer-view-shell.component';

const routes: Routes = [
  {
    path: '',
    component: FarmerShellComponent,
    children: [
      {
        path:'create',
        component: FarmerCreateEditComponent
      },
      {
        path: 'edit/:farmerId',
        component: FarmerCreateEditComponent
      },
      {
        path: 'view/:farmerId',
        component: FarmerViewShellComponent
      }
    ]   
  },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmerRoutingModule { }