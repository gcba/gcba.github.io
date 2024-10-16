import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: 'obelisco/v2', component: HomeComponent }, 
    { path: '', redirectTo: 'obelisco/v2', pathMatch: 'full' }, 
    { path: '**', redirectTo: 'obelisco/v2' }  
  ];
