import { Component, OnInit } from '@angular/core';
import {LanguagesService} from '../../services/languages.service';
import {UtilsService} from "../../services/utils.service";

@Component({
  selector: 'app-qualities',
  templateUrl: './qualities.component.html',
  styleUrls: ['./qualities.component.css']
})
export class QualitiesComponent implements OnInit {

  constructor(public languages: LanguagesService,
              public utils: UtilsService) { }

  ngOnInit(): void {
  }

}
