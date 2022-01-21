import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { MembersService } from 'src/app/Services/members.service';

@Component({
  selector: 'app-add-families',
  templateUrl: './add-families.component.html',
  styleUrls: ['./add-families.component.css']
})
export class AddFamiliesComponent implements OnInit {
  familyForm : FormGroup;
  skills: FormArray;
  constructor(private formBuilder:FormBuilder,private service:MembersService) { }

  ngOnInit(): void {
    this.familyForm = this.formBuilder.group({
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
     Email: ["",Validators.required],
     skills: this.formBuilder.array([
      this.formBuilder.group({
        FirstName: '',
      MiddleName: '',
      LastName: '',
      Title: '',
      Gender: '',
      DateOfBirth: '',
      Classification: '',
      })
     ]) ,
    })
  }
  onSubmit()
  {
    console.log(this.familyForm.value);
    this.service.addMembers(this.familyForm.value).subscribe(
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
  console.log(this.familyForm.controls.DateOfBirth.value)
  var today = new Date();
  var birthDate = new Date(this.familyForm.controls.DateOfBirth.value);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
  {
      age--;
  }
  console.log(age)
  return age;

}

addMember(){
  // this.skills = this.familyForm.get('skills') as FormArray;
  // this.skills.push(this.newSkill());
  const add = this.familyForm.get('skills') as FormArray;
    add.push(this.formBuilder.group({
      FirstName: '',
    MiddleName: '',
    LastName: '',
    Title: '',
    Gender: '',
    DateOfBirth: '',
    Classification: '',
    }))
}

newSkill(): FormGroup {
  return this.formBuilder.group({
    FirstName: '',
    MiddleName: '',
    LastName: '',
    Title: '',
    Gender: '',
    DateOfBirth: '',
    Classification: '',
  })
}



}
