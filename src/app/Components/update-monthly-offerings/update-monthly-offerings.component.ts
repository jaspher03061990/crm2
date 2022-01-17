import { Component, OnInit } from '@angular/core';
import { MembersService } from 'src/app/Services/members.service';
import * as XLS from 'xlsx';



@Component({
  selector: 'app-update-monthly-offerings',
  templateUrl: './update-monthly-offerings.component.html',
  styleUrls: ['./update-monthly-offerings.component.css']
})
export class UpdateMonthlyOfferingsComponent implements OnInit {

  constructor(private service:MembersService) { }
  file:File= {} as File;

  filelist :any = [];

  arrayBuffer : any = [];

  ngOnInit(): void {
  }
  addfile(event :any)      
   {      this.file= event.target.files[0];    
     let fileReader = new FileReader();      
  fileReader.readAsArrayBuffer(this.file);      
   fileReader.onload = (e) => {          this.arrayBuffer = fileReader.result;     
       var data = new Uint8Array(this.arrayBuffer);   
         var arr = new Array();         
   for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);       
     var bstr = arr.join("");          
  var workbook = XLS.read(bstr, {type:"binary"});      
      var first_sheet_name = workbook.SheetNames[0];      
      var worksheet = workbook.Sheets[first_sheet_name];   
         console.log(XLS.utils.sheet_to_json(worksheet,{raw:true}));  
            var arraylist = XLS.utils.sheet_to_json(worksheet,{raw:true});  
                  this.filelist = arraylist;             
    console.log(this.filelist)
  this.service.updateOfferings(this.filelist).subscribe(
    res=>{},
    err=>{},
  );
  }

}
}
