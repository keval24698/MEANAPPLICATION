import { LocalizedString } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Listing } from '../model/listing';
import { ListingService } from '../service/listing.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListDetailComponent implements OnInit {
  id : String;
  listing: Listing;
  d1$:Subscription;
  d1:Observable<Listing[]>;
  //route: any;
  //constructor(private listingService:ListingService) { }
  constructor(private listingsService:ListingService,private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.id = this._Activatedroute.snapshot.paramMap.get("id");
    //   this.d1$ = this.listingsService
    //   .getListingDetails(this.id)
    //   .subscribe(
    //     listingDetails=>{this.listing = listingDetails;
    //   });
    this.d1 = this.listingsService.getListingDetails(this.id);
  }
}
