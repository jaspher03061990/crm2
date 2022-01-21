import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SampleComponent } from './sample/sample.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { AuthorizationInterceptor } from './Authorization/authorization.interceptor';
import { AddMembersComponent } from './Components/members/add-members/add-members.component';
import { AddFamiliesComponent } from './Components/families/add-families/add-families.component';
import { DisplayMembersComponent } from './Components/members/display-members/display-members.component';

import {MatTableExporterModule } from 'mat-table-exporter';
import { ViewMemberDetailsComponent } from './Components/view-member-details/view-member-details.component';
import { UpdateMonthlyOfferingsComponent } from './Components/update-monthly-offerings/update-monthly-offerings.component';




@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    LoginComponent,
    HomeComponent,
    AddMembersComponent,
    AddFamiliesComponent,
    DisplayMembersComponent,
    ViewMemberDetailsComponent,
    UpdateMonthlyOfferingsComponent,
    
    
  
    
  ],
  imports: [
    MatTableExporterModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  
    
  ],
  providers: [{provide:HTTP_INTERCEPTORS,
  useClass:AuthorizationInterceptor,
multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
