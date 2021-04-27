import {Component, OnInit} from '@angular/core';
import {LanguagesService} from './services/languages.service';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public languages: LanguagesService,
              private titleService: Title) {
  }

  /**
   * Set the title of the web application
   */
  ngOnInit(): void {
    this.setTitle("CV - Valentin MAUPIN")
  }

  public setTitle(newTitle: string){
    this.titleService.setTitle(newTitle);
  }

}
