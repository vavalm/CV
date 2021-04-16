import { Component, OnInit } from '@angular/core';
import {LanguagesService} from '../services/languages.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public languages: LanguagesService) { }

  ngOnInit(): void {
  }

}
