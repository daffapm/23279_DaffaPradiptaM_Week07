import { Injectable } from '@angular/core';
import { RecipeDetailPage } from '../recipes/recipe-detail/recipe-detail.page';
import { Contact } from './contact';
import { ModalFavoriteComponent } from 'src/app/contacts/components/modal-favorite/modal-favorite.component';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private contacts: Contact[] = [
    {
      id: 'contact1',
      nama: 'John Thor',
      foto: 'https://image.cnbcfm.com/api/v1/image/104819285-thor.jpg?v=1529476684',
      phone: ['081297951234', '071187678778'],
      email: ['john.thor@email.com']
    },
    {
      id: 'contact2',
      nama: 'John Wick',
      foto: 'https://upload.wikimedia.org/wikipedia/en/9/9f/John_Wick_Keanu.jpeg',
      phone: ['081212128989', '089877778821'],
      email: ['wick.john@email.com', 'johnwick@rocketmail.co.id']
    }
  ];
  constructor() { }

  getAllContacts(){
    return [...this.contacts];
  }

  getContacts(contactId: string){
    return {...this.contacts.find(contacts=>{
      return contacts.id === contactId;
    })};
  }

  deleteContact(contactId: string){
    this.contacts = this.contacts.filter(contact => {
      return contact.id !== contactId;
    });
  }

  addContact(contact: Contact){
    length = this.contacts.length;
    console.log(contact);
    this.contacts.push({
      id: contact.id,      
      nama: contact.nama,      
      foto: contact.foto,
      phone: (<string><unknown>contact.phone).split(","),
      email: (<string><unknown>contact.email).split(",")
    });
  }

  editContact(contact: Contact){
    length = this.contacts.length;
    console.log(contact);
    for(var i = 0; i < length; i++){
      if(this.contacts[i].id == contact.id){
        console.log("check : "+ this.contacts[i].id + "=" + contact.id);
        this.contacts[i].nama = contact.nama;
        this.contacts[i].foto = contact.foto;
        this.contacts[i].email = (<string><unknown>contact.email) .split(",");
        this.contacts[i].phone = (<string><unknown>contact.phone).split(",");
      }
    }
  }
}
