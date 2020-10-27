import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Category1Component } from './category1/category1.component';
import { GuardGuard } from './guard.guard';
import { HistoryDetailsComponent } from './history-details/history-details.component';
import { HistoryComponent } from './history/history.component';
import { LiveComponent } from './live/live.component';
import { LoginComponent } from './login/login.component';
import { RedirectComponent } from './redirect/redirect.component';
import { SharedComponent } from './shared/shared.component';

const routes: Routes = [{ path: '', component: LoginComponent },
{ path: 'ordernow', component: RedirectComponent },
{
  path: 'menu', canActivate: [GuardGuard], component: SharedComponent,
  children: [
    { path: 'cat/:name', component: Category1Component },
    { path: '', component: LiveComponent },
    { path: 'live', component: LiveComponent },
    { path: 'history', component: HistoryComponent },
    { path: 'history/details/:id', component: HistoryDetailsComponent }
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
