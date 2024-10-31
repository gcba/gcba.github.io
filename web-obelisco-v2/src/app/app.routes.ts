import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ObeliscoV1Component } from './pages/obelisco-v1/obelisco-v1.component';



export const routes: Routes = [    
    { path: '', redirectTo: 'obelisco/v2', pathMatch: 'full' }, 
    { path: '**', redirectTo: 'obelisco/v2' },
    { path: '', component: HomeComponent }, 
    { path: 'obelisco-v1', component: ObeliscoV1Component }  
  ];
