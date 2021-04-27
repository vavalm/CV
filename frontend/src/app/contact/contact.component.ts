import { Component, OnInit } from '@angular/core';
import {LanguagesService} from '../services/languages.service';
import { MailService } from "../../services/mail.service";
import { Mail } from "../../models/Mail.model";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public mailForm: FormGroup;

  constructor(public languages: LanguagesService,
              private formBuilder: FormBuilder,
              private mailService: MailService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.mailForm = this.formBuilder.group({
      name: '',
      subject: '',
      email: '',
      message: '',
      from: 'cv@maupin.eu',
      to: 'valentin@maupin.eu'
    })
  }

  onSubmitForm(){
    const formValue = this.mailForm.value;
    const newMail = new Mail(
        formValue['name'],
        formValue['subject'],
        formValue['email'],
        formValue['message'],
        formValue['from'],
        formValue['to'],
    );
    this.mailService.sendMail(newMail);
  }

}
