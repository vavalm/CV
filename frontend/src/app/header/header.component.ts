import { Component, OnInit } from '@angular/core';
import {LanguagesService} from '../services/languages.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(public languages: LanguagesService) { }

  ngOnInit(): void {
  }

}
