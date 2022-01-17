import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MembersService } from 'src/app/Services/members.service';

@Component({
  selector: 'app-add-members',
  templateUrl: './add-members.component.html',
  styleUrls: ['./add-members.component.css']
})
export class AddMembersComponent implements OnInit {
  memberForm : FormGroup;
  constructor(private formBuilder:FormBuilder,private service:MembersService) { }

  ngOnInit(): void {
    this.memberForm = this.formBuilder.group({
      FirstName:["",[Validators.required]],
     MiddleName:["",Validators.required],
     LastName:["",Validators.required],
     Title:["",Validators.required],
     Gender :["",Validators.required],
     Suffix: ["",Validators.required],
     DateOfBirth : ["",Validators.required],
     DoorNo: ["",Validators.required],
     RoadName: ["",Validators.required],
     Address: ["",Validators.required],
     PinCode: ["",Validators.required],
     District: ["",Validators.required],
     City: ["",Validators.required],
     State: ["",Validators.required],
     HomePhone: ["",Validators.required], 
     MobilePhone: ["",Validators.required],
     Email: ["",Validators.required]
    })
  }
  onSubmit()
  {
    console.log(this.memberForm.value);
    this.service.addMembers(this.memberForm.value).subscribe(
      res=>{console.log(res)},
      err=>{}
    )
    
  }

  Titles: any = [
    {value: 'Mr', viewValue: 'Mr'},
    {value: 'Mrs', viewValue: 'Mrs'},
    {value: 'Rev', viewValue: 'Rev'},
    {value: 'Dr', viewValue: 'Dr'}
  ];
  Suffix: any = [
    {value: 'Jr', viewValue: 'Jr'},
    {value: 'Sr', viewValue: 'Sr'},
   
  ];
age()
{
  console.log(this.memberForm.controls.DateOfBirth.value)
  var today = new Date();
  var birthDate = new Date(this.memberForm.controls.DateOfBirth.value);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
  {
      age--;
  }
  console.log(age)
  return age;

}

}
