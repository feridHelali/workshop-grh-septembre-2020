import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-personnel',
  templateUrl: './add-personnel.component.html',
  styleUrls: ['./add-personnel.component.scss']
})
export class AddPersonnelComponent implements OnInit {
  public personelForm:FormGroup;

  constructor(private fb:FormBuilder) {
    this.personelForm=fb.group({
      fullname:['',Validators.required],
      email:['',Validators.email],
      phone:['',Validators.required],
      position:['Developper',Validators.required]
    })
   }

  ngOnInit(): void {
  }

  onSubmit(){
    console.dir(this.personelForm.value);
  }

}
