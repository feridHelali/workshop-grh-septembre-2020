import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPersonnel } from './personnel.model';



@Injectable({
  providedIn: 'root'
})
export class PersonnelService {

  constructor(private http:HttpClient) { }

  getAllPersonnel():Observable<any>{
    return this.http.get('http://localhost:3000/personnel');
  }

  getPersonnelsByPosition(){
    
  }

  addPersonnel(personnel:IPersonnel):Observable<any>{
    return this.http.post('http://localhost:3000/personnel',personnel)
  }

  updatePersonnel(){
    // TODO: To implement updatePersonnel
  }

  deletePersonnel(){
    // TODO: To implement deletePersonnel
  }
}
