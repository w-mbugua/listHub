import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Listing } from './models/listing';

@Injectable({
  providedIn: 'root'
})
export class DbOperationsService {

  constructor(private http: HttpClient) { }

  getListings(){
    return this.http.get('http://localhost:3000/listings');
  }

  viewLisiting(id: any){
    return this.http.get('http://localhost:3000/listings/'+id);
  }

  addListing(newList: any){
    // let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost:3000/listings', JSON.stringify(newList));
  }
  editListing(id: any, newList: any){
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.put('http"//localhost:3000/listings/'+id, newList);
  }

  deleteListing(id: any){
    return this.http.delete('http://localhost:3000/listings/'+id)
  }

}
