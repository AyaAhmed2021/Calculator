import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Them1Component } from './components/them1/them1.component';
import { Them2Component } from './components/them2/them2.component';
import { Them3Component } from './components/them3/them3.component';

const routes: Routes = [
  {path: '', redirectTo: '/calculator/them1' , pathMatch: 'full'},
  {
    path: 'calculator',
    component: DashboardComponent,
    children: [
      { path: 'them1', component: Them1Component },
      { path: 'them2', component: Them2Component },
      { path: 'them3', component: Them3Component }
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
