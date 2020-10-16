import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Contact } from '../contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.page.html',
  styleUrls: ['./contact-detail.page.scss'],
})
export class ContactDetailPage implements OnInit {
  loadedContact: Contact;
  constructor(
    private activatedRoute: ActivatedRoute,
    private contactsSercive: ContactsService,
    private router: Router,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('contactId')) { return; }
      const contactId = paramMap.get('contactId');
      this.loadedContact = this.contactsSercive.getContacts(contactId);
    });
  }

  deleteContact(){
    this.contactsSercive.deleteContact(this.loadedContact.id);
    this.router.navigate(['/contacts']);
    this.presentToast();
  }

  async presentAlert(){
    const alert = await this.alertCtrl.create({
      header:'Hapus Kontak',
      message:'Apakah yaking ingin menghapus? Jika sudah dihapus, tidak bisa dikembalikan lagi.',
      buttons:[
        {
          text: 'Batal',
          role: 'cancel'
        },
        {
          text: 'Hapus',
          handler: () => this.deleteContact()
        }
      ]
    });
    await alert.present();
  }

  async presentToast(){
    const toast = await this.toastCtrl.create({
      message: 'Delete data completely',
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }
}
