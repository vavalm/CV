import { Component, OnInit } from '@angular/core';
import {LanguagesService} from '../../services/languages.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor(public languages: LanguagesService) { }

  ngOnInit(): void {
  }

}
