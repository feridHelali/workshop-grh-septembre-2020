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

  getPersonnelById(id:string):Observable<any>{
    return this.http.get(`http://localhost:3000/personnel/${id}`);
  }

  getPersonnelsByPosition(){
    
  }

  addPersonnel(personnel:IPersonnel):Observable<any>{
    return this.http.post('http://localhost:3000/personnel',personnel)
  }

  updatePersonnel(id:string,personnel:IPersonnel):Observable<any>{
    return this.http.put(`http://localhost:3000/personnel/${id}`,personnel)
  }

  deletePersonnel(id:string):Observable<any>{
    return this.http.delete(`http://localhost:3000/personnel/${id}`);
  }
}
