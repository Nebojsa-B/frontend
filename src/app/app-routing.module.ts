import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomLayoutComponent } from './custom-layout/custom-layout.component';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
  path: '',
  component: CustomLayoutComponent,
  canActivateChild: [AuthGuard],
  children: [
    {
      path: 'dashboard',
      loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    },
    {
      path: 'farmer',
      loadChildren: () => 
        import('./farmer/farmer.module').then((m) => m.FarmerModule)
    },
    {
      path: 'profile',
      loadChildren: () => import('./profile/profile.module').then((m) => m.ProfileModule)
    },
    {
      path: 'panel',
      loadChildren: () => import('./global-panel/global-panel.module').then((m) => m.GlobalPanelModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking' 
  })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
