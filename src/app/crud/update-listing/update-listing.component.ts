import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Listing } from 'src/app/models/listing';
import { ActivatedRoute } from '@angular/router';
import { DbOperationsService } from 'src/app/db-operations.service';

@Component({
  selector: 'app-update-listing',
  templateUrl: './update-listing.component.html',
  styleUrls: ['./update-listing.component.scss']
})
export class UpdateListingComponent implements OnInit {
  listId: any;
  successMsg = false;
  viewList!: Listing;
  

  constructor(private route: ActivatedRoute, private dbOps: DbOperationsService) { }

  ngOnInit(): void {
    this.listId = this.route.snapshot.paramMap.get("id");
    this.dbOps.viewLisiting(this.listId).subscribe((data: any) =>{
      this.viewList = data;
    })
  }

  editListing(updatedList: any){
      this.dbOps.editListing(updatedList.id, updatedList).subscribe((data: any) =>{
        this.successMsg = data;
      })
  }
}
