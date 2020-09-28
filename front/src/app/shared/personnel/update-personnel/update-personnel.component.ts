import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { IPersonnel } from '../personnel.model';
import { PersonnelService } from '../personnel.service';

@Component({
  selector: 'app-update-personnel',
  templateUrl: './update-personnel.component.html',
  styleUrls: ['./update-personnel.component.scss']
})
export class UpdatePersonnelComponent implements OnInit {
  public currentPersonnelId:string;
  public personelForm: FormGroup=  this.fb.group({
    fullname: ['', Validators.required],
    email: ['', Validators.email],
    phone: ['', Validators.required],
    position: ['', Validators.required]
  });

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private personnelService: PersonnelService,
    private snackBar: MatSnackBar) {
      this.route.data.subscribe({
        next: (data) => {
          console.log(data);
          this.currentPersonnelId = data.personnel.id;
          this.personelForm.patchValue({
            fullname:data.personnel.fullname,
            email:data.personnel.email,
            phone:data.personnel.phone,
            position:data.personnel.position
          });
        },
        error: console.log,
        complete: console.log
      });

  }

  ngOnInit(): void {
  
  }

  onSubmit(){
    this.personnelService.updatePersonnel(this.currentPersonnelId,this.personelForm.value)
    .subscribe({
      next: (data) => {
        this.snackBar.open("Personnel Successfully Updated",'X',{duration:3000});
      },
      error: (error) => {
        this.snackBar.open("Sorry fail to Update this Personnel",'X');
      },

      complete: () =>{}
    })
  }

 
}
