import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ListingService} from "../service/listing.service";
import { Listing } from "../model/listing";
@Component({
  selector: 'app-all-listing',
  templateUrl: './all-listing.component.html',
  styleUrls: ['./all-listing.component.css']
})
export class AllListingComponent implements OnInit {
  data$:Observable<Listing[]>;
  constructor(private listingService:ListingService) { }

  ngOnInit(): void {
    this.data$ = this.listingService.getListings();
  }

}
