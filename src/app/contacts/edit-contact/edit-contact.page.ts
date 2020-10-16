import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.page.html',
  styleUrls: ['./edit-contact.page.scss'],
})
export class EditContactPage implements OnInit {
  loadedContact: Contact;
  form: FormGroup;
  constructor(
    private activatedRoute: ActivatedRoute,
    private contactsService: ContactsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('contactId')) { return; }
      const contactId = paramMap.get('contactId');
      this.loadedContact = this.contactsService.getContacts(contactId);
    });

    var email = this.loadedContact.email.join(',');
    var phone = this.loadedContact.phone.join(',');
    this.form = new FormGroup({
      id: new FormControl(this.loadedContact.id, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      nama: new FormControl(this.loadedContact.nama, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      phone: new FormControl(phone, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      email: new FormControl(email, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      foto: new FormControl(this.loadedContact.foto, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
    });
  }

  onSubmit(){
    // this.contactsService.editContact(this.form.value);
    // this.router.navigate(['./contacts']);
    console.log(this.form.value);
    this.contactsService.editContact(this.form.value);
    this.router.navigate(['./contacts']);
  }

}
