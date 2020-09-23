import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonnelService } from '../personnel.service';

@Component({
  selector: 'app-personnel-list',
  templateUrl: './personnel-list.component.html',
  styleUrls: ['./personnel-list.component.scss']
})
export class PersonnelListComponent implements OnInit {
  public personnellist$:Observable<any>
  
  constructor(private personnelService:PersonnelService) { }

  ngOnInit(): void {
    this.personnellist$=this.personnelService.getAllPersonnel();
  }

}
