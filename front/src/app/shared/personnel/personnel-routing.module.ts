import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from 'src/app/layout/home-page/home-page.component';
import { AddPersonnelComponent } from './add-personnel/add-personnel.component';
import { PersonnelListComponent } from './personnel-list/personnel-list.component';
import { UpdatePersonnelComponent } from './update-personnel/update-personnel.component';


const routes: Routes = [
  {path:'',component:PersonnelListComponent},
  {path:'add',component:AddPersonnelComponent},
  {path:'update/:id',component:UpdatePersonnelComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonnelRoutingModule { }
