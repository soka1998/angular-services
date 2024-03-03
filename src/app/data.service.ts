import { Injectable } from '@angular/core';
import { EmployeeVo } from './employee-vo';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  employes:EmployeeVo[]=[
    new EmployeeVo(1,'Alami','Mohammed'),
    new EmployeeVo(2,'Jhon','Jack'),
    new EmployeeVo(3,'Ben','Michel'),
    new EmployeeVo(4,'Alex','Bela'),
    new EmployeeVo(5,'Faty','Younes'),
    new EmployeeVo(6,'Hika','Sami')
    ];

  constructor() { }
  getData():EmployeeVo[] {
    return this.employes;
    }
    add(employee:EmployeeVo):EmployeeVo[] {
      this.employes.push(employee);
      return this.employes;
      }
      }

