import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-listings-page',
  templateUrl: './listings-page.component.html',
  styleUrls: ['./listings-page.component.css']
})
export class ListingsPageComponent implements OnInit {
  listings: Listing[] = [
   // {
     // "id": "777", "name": 'penstand', "price": 20, "description": 'blue', "views": 0
    //},
    //{
     // "id": "888", "name": 'bookstand', "price": 30, "description": 'black', "views": 0
   // }
  ];



  constructor(
    private listingsService: ListingsService,
  ) { }

  ngOnInit(): void {
    this.listingsService.getListings()
      .subscribe(listing => this.listings =  listing);
      console.log("The result is", this.listings.length);
  }

}
