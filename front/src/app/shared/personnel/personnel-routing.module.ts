import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from 'src/app/layout/home-page/home-page.component';
import { ActivePersonnelListComponent } from './active-personnel-list/active-personnel-list.component';
import { AddPersonnelComponent } from './add-personnel/add-personnel.component';
import { PersonnelListComponent } from './personnel-list/personnel-list.component';
import { PersonnelResolver } from './personnel.resolver';
import { UpdatePersonnelComponent } from './update-personnel/update-personnel.component';


const routes: Routes = [
  {path:'',component:PersonnelListComponent},
  {path:'active',component:ActivePersonnelListComponent},
  {path:'add',component:AddPersonnelComponent},
  {
    path:'update/:id',
    component:UpdatePersonnelComponent,
    resolve:{
      personnel:PersonnelResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonnelRoutingModule { }
