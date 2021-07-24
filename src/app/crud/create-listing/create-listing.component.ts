import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DbOperationsService } from 'src/app/db-operations.service';
import { Listing } from 'src/app/models/listing';

@Component({
  selector: 'app-create-listing',
  templateUrl: './create-listing.component.html',
  styleUrls: ['./create-listing.component.scss']
})
export class CreateListingComponent implements OnInit {
  userId = 1;
  newListing!: Listing;
  successMsg: any;

  constructor(private dbOps: DbOperationsService) { }

  ngOnInit(): void {
  }

  addNewList(listForm: NgForm){
      this.newListing = {
        "userId": this.userId,
        "id": 152,
        "title": listForm.controls.title.value,
        "description": listForm.controls.description.value,
        "price": listForm.controls.price.value,
        "active": listForm.controls.status.value,
        "status": ""
      }
      console.log("form",this.newListing)
      this.dbOps.addListing(this.newListing).subscribe((data) =>{
        this.successMsg = data;
      })
  }
}
