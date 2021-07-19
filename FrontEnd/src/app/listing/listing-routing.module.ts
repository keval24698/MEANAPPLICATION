import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllListingComponent } from '../all-listing/all-listing.component';
import { ListDetailComponent } from '../list-detail/list-detail.component';

const routes: Routes = [
  {
    path:"",
    component:AllListingComponent
  },
  {
    path:":id",
    component:ListDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListingRoutingModule { }
