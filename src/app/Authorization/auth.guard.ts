import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../Services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  /**
   *
   */
  constructor(private service:LoginService,private router:Router) {
    

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
 var userRoles = route.data['permittedRoles'] as Array<string>
 alert("came to activated route")
 console.log(userRoles)
 if(userRoles!=null)
 {
   alert("has user roles")
      if(this.service.roleMatch(userRoles))
        {
          return true;
        }
      else
        {
          alert("role didnt match")
          this.router.navigate(["login"])

          return false;
        }
 }
 else
 {
this.router.navigate(["login"])
return false;
 }
 
    
  }
  
}
