import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbOperationsService } from 'src/app/db-operations.service';
import { Listing } from 'src/app/models/listing';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-delete-listing',
  templateUrl: './delete-listing.component.html',
  styleUrls: ['./delete-listing.component.scss']
})
export class DeleteListingComponent implements OnInit {
  listId!: any;
  successMsg!: Observable<Listing>; 
  
  
  constructor(private dbOps: DbOperationsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.listId = this.route.snapshot.paramMap.get("id");
    this.dbOps.deleteListing(this.listId).subscribe((data: any) =>{
      this.successMsg = data;
    })
  }

}
