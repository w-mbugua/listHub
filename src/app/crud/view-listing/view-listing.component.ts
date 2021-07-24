import { Component, OnInit } from '@angular/core';
import { DbOperationsService } from 'src/app/db-operations.service';
import { Listing } from 'src/app/models/listing';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-view-listing',
  templateUrl: './view-listing.component.html',
  styleUrls: ['./view-listing.component.scss']
})
export class ViewListingComponent implements OnInit {

  listArr!: any;
  viewListing!: Observable<Listing>
  isViewPage: boolean = false;

  constructor(private dbOps: DbOperationsService) { }

  ngOnInit(): void {
    this.dbOps.getListings().subscribe((data: any) => {
      this.listArr = data;
    })
    console.log("log",this.listArr)
  }

  showListing(listing: Listing){
     this.isViewPage = true;
      this.dbOps.viewLisiting(listing.id).subscribe((data: any) => {
        this.viewListing = data;
      })
  }
}
