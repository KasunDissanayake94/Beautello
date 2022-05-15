import { Injectable } from '@angular/core';
import {Message} from "../model/Message";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private firestore: AngularFirestore) { }

  createMessage(message: Message) {
    return this.firestore.collection('message').add(message)
      .then(docRef => {
        return docRef.id;
      })
      .catch(error => console.error('Error adding document: ', error));

  }
}
