import { Component, OnInit } from '@angular/core';
import {LanguagesService} from '../../services/languages.service';

@Component({
  selector: 'app-qualities',
  templateUrl: './qualities.component.html',
  styleUrls: ['./qualities.component.css']
})
export class QualitiesComponent implements OnInit {

  constructor(public languages: LanguagesService) { }

  ngOnInit(): void {
  }

}
