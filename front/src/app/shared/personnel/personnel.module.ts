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
import { ActivePersonnelListComponent } from './active-personnel-list/active-personnel-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    PersonnelListComponent, 
    AddPersonnelComponent, 
    UpdatePersonnelComponent, ActivePersonnelListComponent],
  imports: [
    CommonModule,
    PersonnelRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports:[PersonnelListComponent, AddPersonnelComponent, UpdatePersonnelComponent],
  providers:[PersonnelService]
})
export class PersonnelModule { }
