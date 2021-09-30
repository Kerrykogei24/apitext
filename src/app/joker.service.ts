import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokerService {

  
  constructor(public http:HttpClient) { }

  getjokers():Observable<any>{
    return this.http.get("https://safespacebackendgp.herokuapp.com/reports/");
  }
}
