import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IPersonnel } from './personnel.model';
import { PersonnelService } from './personnel.service';

@Injectable({ providedIn: 'root' })
export class PersonnelResolver implements Resolve<IPersonnel> {
  constructor(private service: PersonnelService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.service.getPersonnelById(route.paramMap.get('id'));
  }
}