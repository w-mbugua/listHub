import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  constructor(private store: AngularFirestore, private router: Router) { }

  getComments(){
    return this.store.collection('comments');
  }

  addComment(comment: any){
    return this.store.collection('comments').add(comment);
  }

  editComment(id: any, comment: any){
    return this.store.collection('comments').doc(id).set(comment);
  }

  deleteComment(id: any){
    return this.store.collection('comments').doc(id).delete();
  }
}
