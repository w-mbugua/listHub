import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { ListingsComponent } from './listings/listings.component';
import { CreateListingComponent } from './create-listing/create-listing.component';
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
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
