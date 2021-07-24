import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';

import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { ListingsComponent } from './listings/listings.component';
import { CreateListingComponent } from './crud/create-listing/create-listing.component';
import { EditListingComponent } from './edit-listing/edit-listing.component';
import { PreviewListingComponent } from './preview-listing/preview-listing.component';
import { PhotosComponent } from './photos/photos.component';
import { UploadPhotoComponent } from './upload-photo/upload-photo.component';
import { EditPhotoComponent } from './edit-photo/edit-photo.component';
import { PreviewPhotoComponent } from './preview-photo/preview-photo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListingDetailsComponent } from './listing-details/listing-details.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { AboutComponent } from './about/about.component';
import { SupportComponent } from './support/support.component';
import { MenuComponent } from './menu/menu.component';
import { PhotoListingComponent } from './photo-listing/photo-listing.component';
import { PlayGroundComponent } from './playground/playground.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    LogoutComponent,
    AccountComponent,
    ListingsComponent,
    CreateListingComponent,
    EditListingComponent,
    PreviewListingComponent,
    PhotosComponent,
    UploadPhotoComponent,
    EditPhotoComponent,
    PreviewPhotoComponent,
    PageNotFoundComponent,
    ListingDetailsComponent,
    FeaturesComponent,
    PricingComponent,
    AboutComponent,
    SupportComponent,
    MenuComponent,
    PhotoListingComponent,
    PlayGroundComponent,
    ViewListingComponent,
    UpdateListingComponent,
    DeleteListingComponent,
    AddcomentComponent,
    ViewcomentComponent,
    EditcomentComponent,
    DeletecommentComponent,
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
