import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(login)
  {
    
    //alert("came to service");
    console.log(login)
   //return this.http.post(environment.ApiUrl+"UsersController/Login",login) 
   
  //  var loginSuccess = {};
  //  return loginSuccess;
  return new Observable((arg)=>{
    arg.next({});
  })
  }
  userData()
  {
    return this.http.get(environment.ApiUrl+"UsersController/GetProfile")
  }
  roleMatch(roles:string[]):boolean
  {
    //console.log("dangeroud", decodeURIComponent(escape(window.atob( localStorage.getItem('token').split('.')[1]) )));
    console.log("Iam role",roles)
    var isMatch = false;
    alert("is Match")
   
    var payload = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]))
    alert("afetr is match")
    var userRole =payload.role
    roles.forEach((element)=>{
      console.log(element)
      if(element==userRole)
      {
        isMatch = true;
        return true
      }
    return isMatch;
    });
    return isMatch;
  }
 
    
}
