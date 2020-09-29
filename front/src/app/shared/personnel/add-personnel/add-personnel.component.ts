import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PersonnelService } from '../personnel.service';

@Component({
  selector: 'app-add-personnel',
  templateUrl: './add-personnel.component.html',
  styleUrls: ['./add-personnel.component.scss']
})
export class AddPersonnelComponent implements OnInit {
  public personelForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private personnelService: PersonnelService,
    private snackBar:MatSnackBar
  ) {
    this.personelForm = fb.group({
      fullname: ['', Validators.required, Validators.minLength(10), Validators.maxLength(30)],
      email: ['', Validators.required,Validators.email],
      phone: ['', Validators.required],
      position: ['Developper', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.personnelService.addPersonnel(this.personelForm.value)
      .subscribe(
        {
          next: (data) => {
            this.snackBar.open("Personnel Successfully Added",'X',{duration:3000});
            this.personelForm.reset();
          },
          error: (error) => {
            this.snackBar.open("Sorry fail to Add new Personnel",'X');
          },

          complete: () =>{}
        });
  }



}
