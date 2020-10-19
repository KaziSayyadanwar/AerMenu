import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Category1Component } from './category1/category1.component';
import { Category2Component } from './category2/category2.component';
import { Category3Component } from './category3/category3.component';
import { Category4Component } from './category4/category4.component';
import { Category5Component } from './category5/category5.component';
import { Category6Component } from './category6/category6.component';
import { Category7Component } from './category7/category7.component';
import { Category8Component } from './category8/category8.component';
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
    { path: 'cat1', component: Category1Component },
    { path: 'cat2', component: Category2Component },
    { path: 'cat3', component: Category3Component },
    { path: 'cat4', component: Category4Component },
    { path: 'cat5', component: Category5Component },
    { path: 'cat6', component: Category6Component },
    { path: 'cat7', component: Category7Component },
    { path: 'cat8', component: Category8Component },
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
