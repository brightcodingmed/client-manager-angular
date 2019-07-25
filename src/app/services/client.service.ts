import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs'
import Client from './../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clientsCollection: AngularFirestoreCollection;
  constructor(private afs: AngularFirestore) {
     
       this.clientsCollection = afs.collection('clients');
   }

   getAll() {
    return this.clientsCollection.snapshotChanges().pipe(
      map(client => client.map(a => {
        const doc = a.payload.doc.data() as Client;
        const id = a.payload.doc.id;
        return { id, ...doc };
      }))
    );
   }

   persist(client) {
     return this.clientsCollection.add(client);
   }

   delete(id) {
    return this.clientsCollection.doc(id).delete();
   }

   getOne(id): Observable<Client> {
     return this.clientsCollection.doc<Client>(id).valueChanges();
   }

   update(id, data) {
     return this.clientsCollection.doc(id).update(data);
   }
}
