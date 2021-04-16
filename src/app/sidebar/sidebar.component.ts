import { Component, OnInit } from '@angular/core';
import {LanguagesService} from '../services/languages.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public languages: LanguagesService) { }

  ngOnInit(): void {
  }

}
