import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ObeliscoV1Component } from './pages/obelisco-v1/obelisco-v1.component';


export const routes: Routes = [    
  { path: '', redirectTo: 'obelisco/v2', pathMatch: 'full' }, 
  { path: '**', redirectTo: 'obelisco/v2' },
  { path: 'obelisco/v2', component: HomeComponent }, 
  { path: 'obelisco-v1', component: ObeliscoV1Component }  
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
