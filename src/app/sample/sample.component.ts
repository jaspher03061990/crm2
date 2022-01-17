import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {SampleServiceService} from '../Services/sample-service.service'

import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
minDate:any
maxDate:any
  constructor(private service :SampleServiceService,
    private formbuilder:FormBuilder,
    ) { 
   
  }
  
  setDob:any
 sample: FormGroup 
  ngOnInit(): void {
    this.sample = this.formbuilder.group({
      name : ["",[Validators.required,Validators.pattern('(^[A-Z]{1})+[a-z]{4,}')]],
      date :["",Validators.required]
    });

  }
onSubmit()
{
  
 
  
  var form = this.sample.value
  alert(typeof(form.name))
  alert(form.date)
  this.service.export().subscribe(
    res=>{console.log("I am a guy",res)},
    err=>{}
  );
//   this.service.sendSample(this.sample.value).subscribe(res=>{
//     alert("I am "+this.setDob); 
//     console.log(this.setDob)
//     console.log(res)
//   },
//     err=>{})
// console.log(this.sample.value)
}

}
