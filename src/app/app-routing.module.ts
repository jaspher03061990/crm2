import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Authorization/auth.guard';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { AddMembersComponent } from './Components/members/add-members/add-members.component';
import { AddFamiliesComponent } from './Components/families/add-families/add-families.component';
import { DisplayMembersComponent } from './Components/members/display-members/display-members.component';
import { UpdateMonthlyOfferingsComponent } from './Components/update-monthly-offerings/update-monthly-offerings.component';
import { ViewMemberDetailsComponent } from './Components/view-member-details/view-member-details.component';

import { SampleComponent } from './sample/sample.component';

const routes: Routes = [{path:"home",component:HomeComponent},
{path:"members",component:DisplayMembersComponent},
{path:"member-profile",component:AddMembersComponent},
{path:"family-profile",component:AddFamiliesComponent},
{path:'sample',component:SampleComponent},
{path:"login",component:LoginComponent},
{path:"view-member",component:ViewMemberDetailsComponent},
{path:"update-monthly-offerings",component:UpdateMonthlyOfferingsComponent},
{path:"",component:LoginComponent }];//

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
