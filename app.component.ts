import { Component } from '@angular/core';
import {UserdataService} from "./services/userdata.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 users:any;
 constructor(private userData:UserdataService){
  userData.users().subscribe((response:any)=>{
     console.log(response.data)
   this.users=response.data;
   console.log(this.users)
  })
 }
 

}
