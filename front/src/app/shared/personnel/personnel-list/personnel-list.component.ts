import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Subscription } from 'rxjs';
import { IPersonnel } from '../personnel.model';
import { PersonnelService } from '../personnel.service';

@Component({
  selector: 'app-personnel-list',
  templateUrl: './personnel-list.component.html',
  styleUrls: ['./personnel-list.component.scss']
})
export class PersonnelListComponent implements OnInit,OnDestroy {
  private deleteSubscription:Subscription;
  public personnellist:IPersonnel[];
  
  constructor(
    private personnelService:PersonnelService,
    private snackBar:MatSnackBar) { }
    
    ngOnInit(): void {
      this.loadAllPersonnel();
    }

    private loadAllPersonnel(){
     this.personnelService.getAllPersonnel()
      .subscribe({
          next: (data) => {this.personnellist=data as IPersonnel[];},
          error: console.log,
          complete:console.log
        });
    }
    
  deletePersonnel(id){
    this.deleteSubscription=this.personnelService.deletePersonnel(id)
    .subscribe({
      next: (data) => {
        this.snackBar.open("Personnel Successfully removed",'X',{duration:3000});
        this.loadAllPersonnel();
     
      },
      error: (error) => {
        this.snackBar.open("Sorry fail to remove this Personnel",'X');
      },

      complete: () =>console.log
    }

    );
    this.deleteSubscription.unsubscribe();
    
  }

  ngOnDestroy(): void {
    
  }
  
}
