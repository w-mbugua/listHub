import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoListComponent } from './auto-list/auto-list.component';

import { AddcomentComponent } from './comments/addcoment/addcoment.component';
import { DeletecommentComponent } from './comments/deletecomment/deletecomment.component';
import { EditcomentComponent } from './comments/editcoment/editcoment.component';
import { ViewcomentComponent } from './comments/viewcoment/viewcoment.component';
import { CreateListingComponent } from './crud/create-listing/create-listing.component';
import { DeleteListingComponent } from './crud/delete-listing/delete-listing.component';
import { UpdateListingComponent } from './crud/update-listing/update-listing.component';
import { ViewListingComponent } from './crud/view-listing/view-listing.component';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
{ path: 'signup', component: SignupComponent },
{ path: 'login', component: LoginComponent },
{ path: 'logout', component: LogoutComponent },

{path:'create-listing', component:CreateListingComponent},
{ path:'view-listing', component:ViewListingComponent },
{ path:'delete-listing/:id', component:DeleteListingComponent},
{path:'update-listing/:id', component:UpdateListingComponent},
{path: 'validate', component: AutoListComponent},
{ path:'add-comment', component:AddcomentComponent },
{ path:'view-comment', component:ViewcomentComponent },
{ path:'delete-comment/:id', component:DeletecommentComponent},
{ path:'update-comment/:id', component:EditcomentComponent},
{ path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
