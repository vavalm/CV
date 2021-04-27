import {Component, OnInit} from '@angular/core';
import {LanguagesService} from './services/languages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public languages: LanguagesService) {
  }

  ngOnInit(): void {
  }


}
