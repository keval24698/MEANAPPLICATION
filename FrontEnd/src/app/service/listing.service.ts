import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Listing } from '../model/listing';   
@Injectable({
  providedIn: 'root'
})
export class ListingService {
  private ROOT_URL = "http://localhost:3000/api/listings";
  constructor(private http:HttpClient) { }

  getListings():Observable<Listing[]>
  {
          return this.http.get<Listing[]>(this.ROOT_URL);
  }

  getListingDetails(id:String):Observable<Listing[]>
  {
          return this.http.get<Listing[]>(`${this.ROOT_URL}/${id}`);
  }
}
