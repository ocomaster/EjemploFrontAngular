import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common'; //
import {RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';


const routes: Routes = [
  {path: '',
  component: PagesComponent,
  children: [
    {path: 'dashboard', component: DashboardComponent}, // El Path: es la ruta url que se puede digitar, component: hacia el componente que va a redireccionar el path
    {path: 'progress', component: ProgressComponent},
    {path: 'grafica1', component: Graficas1Component},
    {path: '', redirectTo:'/dashboard', pathMatch:'full'},

  ]

},

  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},


  {path: '**', component: NopagefoundComponent},

]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }