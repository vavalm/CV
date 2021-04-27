import { Component, OnInit } from '@angular/core';
import {LanguagesService} from '../../services/languages.service';
import {UtilsService} from "../../services/utils.service";

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {

  constructor(public languages: LanguagesService,
              public utils: UtilsService) { }

  ngOnInit(): void {
  }

}
