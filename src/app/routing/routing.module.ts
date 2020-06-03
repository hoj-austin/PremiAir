import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TopbarComponent } from '../topbar/topbar.component';
 
const routes: Routes = [
  { path: 'home', component: TopbarComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
 
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }

