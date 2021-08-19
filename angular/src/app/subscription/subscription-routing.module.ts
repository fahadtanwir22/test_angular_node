import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscriptionMainComponent } from './pages/subscription-main/subscription-main.component';


const routes: Routes = [
  {
    path: 'main',
    component: SubscriptionMainComponent
  },
  {
    path: '',
    redirectTo: '/subscription/main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscriptionRoutingModule { }
