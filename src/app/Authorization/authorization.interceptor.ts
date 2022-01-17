import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    alert("came to interceptors")
    var token = localStorage.getItem('token')
    
    if(token)
    {
      alert("adding header")
      var clonedRequest = request.clone({
        headers : request.headers.set('Authorization','Bearer '+token)
        
      });
      alert("yes header")
      console.log(clonedRequest.headers)
      return next.handle(clonedRequest).pipe(
        tap(sucess=>{ 
          alert("who am I")
        },
          err=>{
            alert("interceptor error");
            console.log(err)
            
          })
      )
    }
    else{
      alert("no header")
return next.handle(request.clone())
    }
  }
}


