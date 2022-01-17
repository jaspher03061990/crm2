import { Component, OnInit } from '@angular/core';
import { MembersService } from 'src/app/Services/members.service';

@Component({
  selector: 'app-view-member-details',
  templateUrl: './view-member-details.component.html',
  styleUrls: ['./view-member-details.component.css']
})
export class ViewMemberDetailsComponent implements OnInit {

  constructor(private service:MembersService) { }
memberDeatils :any=[];
  ngOnInit(): void {
this.memberDeatils = this.service.memberDetails;
console.log(this.memberDeatils)
  }

}
