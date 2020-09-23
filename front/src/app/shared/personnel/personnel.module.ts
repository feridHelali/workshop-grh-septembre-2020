import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonnelRoutingModule } from './personnel-routing.module';
import { PersonnelListComponent } from './personnel-list/personnel-list.component';
import { AddPersonnelComponent } from './add-personnel/add-personnel.component';
import { UpdatePersonnelComponent } from './update-personnel/update-personnel.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { PersonnelService } from './personnel.service';


@NgModule({
  declarations: [
    PersonnelListComponent, 
    AddPersonnelComponent, 
    UpdatePersonnelComponent],
  imports: [
    CommonModule,
    PersonnelRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports:[PersonnelListComponent, AddPersonnelComponent, UpdatePersonnelComponent],
  providers:[PersonnelService]
})
export class PersonnelModule { }
