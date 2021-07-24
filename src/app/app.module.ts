import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';


import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

import { CreateListingComponent } from './crud/create-listing/create-listing.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { ViewListingComponent } from './crud/view-listing/view-listing.component';
import { UpdateListingComponent } from './crud/update-listing/update-listing.component';
import { DeleteListingComponent } from './crud/delete-listing/delete-listing.component';
import { AddcomentComponent } from './comments/addcoment/addcoment.component';
import { ViewcomentComponent } from './comments/viewcoment/viewcoment.component';
import { EditcomentComponent } from './comments/editcoment/editcoment.component';
import { DeletecommentComponent } from './comments/deletecomment/deletecomment.component';
import { AutoListComponent } from './auto-list/auto-list.component';
import { OnFocusBlurDirective } from './directives/on-focus-blur.directive';
import { ValidISBNDirective } from './directives/valid-isbn.directive';

@NgModule({
  declarations: [
    AppComponent,

    SignupComponent,
    LoginComponent,
    LogoutComponent,

    CreateListingComponent,

    PageNotFoundComponent,

    ViewListingComponent,
    UpdateListingComponent,
    DeleteListingComponent,
    AddcomentComponent,
    ViewcomentComponent,
    EditcomentComponent,
    DeletecommentComponent,
    AutoListComponent,
    OnFocusBlurDirective,
    ValidISBNDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
