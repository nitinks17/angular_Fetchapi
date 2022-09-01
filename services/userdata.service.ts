import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http:HttpClient) { }

  users(){
   return this.http.get(`https://reqres.in/api/users?page=2`)
  }
}
