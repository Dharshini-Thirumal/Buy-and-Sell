import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { EditListingsPageComponent } from './edit-listings-page/edit-listings-page.component';
import { ListingDetailPageComponent } from './listing-detail-page/listing-detail-page.component';
import { ListingsPageComponent } from './listings-page/listings-page.component';
import { MyListingsPageComponent } from './my-listings-page/my-listings-page.component';
import { NewListingsPageComponent } from './new-listings-page/new-listings-page.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {path: 'listings', component: ListingsPageComponent, pathMatch: 'full'},
  {path: 'listings/:id', component: ListingDetailPageComponent},
  {path: 'contact/:id', component: ContactPageComponent},
  {path: 'edit-listings/:id', component: EditListingsPageComponent},
  {path: 'my-listings', component: MyListingsPageComponent},
  {path: 'new-listings', component: NewListingsPageComponent},
  {path: '', redirectTo: '/listings', pathMatch: 'full'}
];

@NgModule({
  declarations: [MyListingsPageComponent, ListingsPageComponent, ListingDetailPageComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
