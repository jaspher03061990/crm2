import { Injectable } from '@angular/core';
import { sample } from '../Models/sample.model';
import{HttpClient} from '@angular/common/http';

import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SampleServiceService {
sampleData:sample = new sample();
emailid:string = "thomas@gmail.com"
password:string = "Thomas3?"
  constructor(private http :HttpClient) { }
  values:any
  
  sendSample(value)
  {
    





    alert("CAME SERVICE")
   this.values={
     Name : "Srinidhy",
     Email: "thomas@gmail.com",
     Password : "Thomas3?",
     DateOfBirth : value.date
   }
    alert(" SERVICE")
     return this.http.post(environment.ApiUrl+"Values/Addvalue",this.values)

  }
  export()
  {
    return this.http.get(environment.ApiUrl+"Values/GetValue")
  }



  
}
