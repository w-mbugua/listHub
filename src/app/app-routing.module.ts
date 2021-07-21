import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AccountComponent } from './account/account.component';
import { EditListingComponent } from './edit-listing/edit-listing.component';
import { EditPhotoComponent } from './edit-photo/edit-photo.component';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';
import { ListingDetailsComponent } from './listing-details/listing-details.component';
import { ListingsComponent } from './listings/listings.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PhotosComponent } from './photos/photos.component';
import { PreviewListingComponent } from './preview-listing/preview-listing.component';
import { PreviewPhotoComponent } from './preview-photo/preview-photo.component';
import { PricingComponent } from './pricing/pricing.component';
import { SignupComponent } from './signup/signup.component';
import { SupportComponent } from './support/support.component';
import { UploadPhotoComponent } from './upload-photo/upload-photo.component';

const routes: Routes = [
{ path: 'home', component: HomeComponent},
{ path: 'listings/:id', component: ListingDetailsComponent },
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'signup', component: SignupComponent },
{ path: 'login', component: LoginComponent },
{ path: 'logout', component: LogoutComponent },
{ path: 'account', component: AccountComponent },
{ path: 'features', component: FeaturesComponent },
{ path: 'pricing', component: PricingComponent },
{ path: 'about', component: AboutComponent },
{ path: 'support', component: SupportComponent },
{ path: 'listings', component: ListingsComponent },
{ path: 'listing/:id', component: ListingDetailsComponent },
{ path: 'listing/edit', component: EditListingComponent },
{ path: 'listing/preview', component: PreviewListingComponent },
{ path: 'photos', component: PhotosComponent },
{ path: 'photo/upload', component: UploadPhotoComponent },
{ path: 'photo/edit', component: EditPhotoComponent },
{ path: 'photo/preview', component: PreviewPhotoComponent },
{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
