import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MembersService {
memberDetails :any=[];
  constructor(private http:HttpClient) { }
  controller="Members/"
  memberList:any=[]
  addMembers(members)
  {
   return this.http.post(environment.ApiUrl+"Members/addmembers",members);
  }
  getMember()
  {
    this.memberList = this.http.get(environment.ApiUrl+this.controller+"GetMemberList")
    console.log("I am service",)
    console.log(this.memberList);
    return this.memberList;
  }
  setDetails(data)
  {
    this.memberDetails = data;
  }
  updateOfferings(data)
  {
    console.log(environment.ApiUrl+this.controller+"update-monthly-offerings")
    return this.http.post(environment.ApiUrl+this.controller+"update-monthly-offerings",data);
  }
}
