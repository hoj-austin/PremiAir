import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component'
import { TopbarComponent } from '../topbar/topbar.component';
import { ScenicsComponent } from '../scenics/scenics.component'
import { ToursComponent } from '../tours/tours.component'
 
const routes: Routes = [
  // { path: 'home', component: AppComponent, outlet: "homeoutlet" },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'scenics', component: ScenicsComponent},
  { path: 'tours', component: ToursComponent},
 
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

