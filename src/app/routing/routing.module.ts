import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ScenicsComponent } from '../scenics/scenics.component'
import { ToursComponent } from '../tours/tours.component'
import { AerialWorkComponent } from '../aerial-work/aerial-work.component'
import { AboutUsComponent } from '../about-us/about-us.component'
 
const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'scenics', component: ScenicsComponent},
  { path: 'tours', component: ToursComponent},
  { path: 'aerial', component: AerialWorkComponent},
  { path: 'about', component: AboutUsComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }

