import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MembersService } from 'src/app/Services/members.service';
import {MatSort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { MatTableExporterDirective } from 'mat-table-exporter';
import {Router} from '@angular/router';


@Component({
  selector: 'app-display-members',
  templateUrl: './display-members.component.html',
  styleUrls: ['./display-members.component.css']
})
export class DisplayMembersComponent implements OnInit {
  dataSource = new MatTableDataSource();
@ViewChild(MatSort) sort:MatSort
@ViewChild(MatPaginator) paginator:MatPaginator
@ViewChild("exporter") exporter! : MatTableExporterDirective;
dtOptions: any = {};



  
  constructor(private service:MembersService,private router: Router) { }
  displayedColumns: string[] = ['id', 'title','firstName','lastName','gender','suffix','dateOfBirth','action','edit'];
  ngOnInit(): void {
    this.getList();
    //alert("sort")
    
    
  }
  

  filter(value:string)
  {
this.dataSource.filter = value.trim();
  }
getList()
{
  
  
  this.service.getMember().subscribe(res=>{
    console.log(res)
    this.dataSource = new MatTableDataSource(res);
    this.dataSource.sort = this.sort
    this.dataSource.paginator = this.paginator
  },
    err=>{ }
  );
    
}

handleUpload(event:any)
{
  
  } 

  createMember() {
    this.router.navigateByUrl('/member-profile');
  }

}
