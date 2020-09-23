import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './layout/about-page/about-page.component';
import { ContactPageComponent } from './layout/contact-page/contact-page.component';
import { HomePageComponent } from './layout/home-page/home-page.component';
import { PersonnelPageComponent } from './layout/personnel-page/personnel-page.component';


const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'personnel',
  loadChildren:() => import('./shared/personnel/personnel.module').then(m => m.PersonnelModule)},
  {path:'about',component:AboutPageComponent},
  {path:'contact',component:ContactPageComponent},
  {path:'**',redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
