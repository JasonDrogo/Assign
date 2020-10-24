import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from 'src/component/landing/landing.component';
import { NavbarComponent } from 'src/component/navbar/navbar.component';


const routes: Routes = [
  {path:'',component : NavbarComponent,
  children:[
    {path:'',component: LandingComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
