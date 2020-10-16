import { Component, OnInit } from '@angular/core';
import { IonItemSliding, ModalController } from '@ionic/angular';
import { ModalFavoriteComponent } from './components/modal-favorite/modal-favorite.component';
import { Contact } from './contact';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  contacts: Contact[];
  constructor(
    private contactsService: ContactsService,
    private modalCtrl: ModalController) { }

  ngOnInit() {
    this.contacts = this.contactsService.getAllContacts();
  }

  ionViewWillEnter(){
    this.contacts = this.contactsService.getAllContacts();
  }

  prior(contact: Contact, slidingItem: IonItemSliding){
    slidingItem.close();
    console.log(contact.nama, 'is set as priority contact');
  }

  onFilterUpdate(event: CustomEvent){
    console.log(event.detail);
  }

  async presentModal(){
    const modal = await this.modalCtrl.create({
      component: ModalFavoriteComponent
    });

    modal.onDidDismiss().then(resultData => {
      console.log(resultData.data, resultData.role);
    });

    return await modal.present();
  }
}
