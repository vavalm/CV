import { Injectable } from '@angular/core';
import {Mail} from "../models/Mail.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MailService {
  private mail: Mail;
  mailSubject = new Subject<Mail>();

  constructor() { }

  //TODO: write function to send an email
  sendMail(mail: Mail){
    console.log(mail);
  }

}
