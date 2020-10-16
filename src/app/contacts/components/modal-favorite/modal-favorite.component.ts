import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { Contact } from '../../contact';
import { ContactsService } from '../../contacts.service';

@Component({
  selector: 'app-modal-favorite',
  templateUrl: './modal-favorite.component.html',
  styleUrls: ['./modal-favorite.component.scss'],
})
export class ModalFavoriteComponent implements OnInit {
  form : NgForm;
  contact: Contact[];
  constructor(
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private router: Router,
    private contactService: ContactsService
  ) { }

  ngOnInit() {}

  onSubmit(form: NgForm){
    if(!form.valid){
      return;
    }
    const name = form.value.nama;
    const phone = form.value.phone;
    const email = form.value.email;
    const id  = form.value.id;
    const foto = form.value.foto;
    console.log("data yang tersimpan berupa ", name, phone, email, id, foto);
    this.contactService.addContact(form.value);
    this.presentLoading().then(()=>{
      //window.location.reload();
      this.modalCtrl.dismiss(null, 'cancel');
      this.router.navigate(['/contacts']);
      this.presentToast();
    })
  }

  ionModalDidDismiss(){
    this.contact = this.contactService.getAllContacts();
  }

  addContact(){
    this.router.navigate(['/contacts']);
  }

  onCancel(){
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onSave(){
    this.presentLoading().then(()=>{
      this.router.navigate(['/contacts']);
      
      this.modalCtrl.dismiss(null, 'cancel');
      this.presentToast();
    })
  }

  async presentLoading(){
    const loading = await this.loadingCtrl.create({
      message: 'Saving data. . .',
      duration: 1500
    });
    await loading.present();

    const {role, data} = await loading.onDidDismiss();
    console.log('loading dismissed!');
  }
  
  async presentToast(){
    const toast = await this.toastCtrl.create({
      message: 'New contact added',
      duration: 4000,
      position: 'bottom'
    });
    toast.present();
  }
}
