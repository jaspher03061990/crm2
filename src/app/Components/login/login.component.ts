import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';
import { users} from '../../Constants/data_mock.constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,
    private service:LoginService,
    private router:Router) { }
  show = false;
login : FormGroup
  ngOnInit(): void {
    this.login = this.formBuilder.group({

      Email : ["",[Validators.required,Validators.email]],
      Password : ["",[Validators.required,Validators.minLength(8)]]
    })
  }
  clickme()
  {
    alert("clicked");
  }
onSubmit()
{
  localStorage.removeItem("token");
  this.service.login(this.login.value).subscribe((res:any)=>{
    
    //localStorage.setItem("token",res.token);
    //this.login.reset();
    
    let loginId:any = this.login.controls['Email'].value;
    let filterUser = users.filter((arg)=>{
      return loginId === arg.loginId;
    });
    if(filterUser.length > 0) {
      localStorage.setItem("loggedInUserDetails",JSON.stringify(filterUser[0]));
      this.router.navigate(['home']);
    } else {
      alert('invalid user')
    }
  },
    err=>{console.log(err)})
}
showPassword()
{
  
  this.show=!this.show;
}
get f ():{[kye:string]:AbstractControl}
{
return this.login.controls;
}

GetProfile(){
  this.service.userData().subscribe(
    res=>{console.log(res)},
    err=>{}
  )
}
logout()
{
  localStorage.removeItem('token');
}
}
