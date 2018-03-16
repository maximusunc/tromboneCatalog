import { NgModule } from '@angular/core';
import { RouterModule, Routes } from  "@angular/router";
import { SearchComponent } from "./search/search.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TromboneDetailComponent } from "./trombone-detail/trombone-detail.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: "trombones", component: SearchComponent},
  { path: "home", component: DashboardComponent},
  { path: "detail/:id", component: TromboneDetailComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
