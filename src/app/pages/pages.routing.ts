import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";

const routes: Routes = [
  {path: 'dashboard',  component: PagesComponent,
  children: [
    {path: '', component: DashboardComponent}, // El Path: es la ruta url que se puede digitar, component: hacia el componente que va a redireccionar el path
    {path: 'progress', component: ProgressComponent},
    {path: 'grafica1', component: Graficas1Component},
    //{path: '', redirectTo:'/dashboard', pathMatch:'full'},

  ]

},

];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule]
})
export class PagesRoutingModule {}
