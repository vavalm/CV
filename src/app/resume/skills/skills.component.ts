import { Component, OnInit } from '@angular/core';
import {LanguagesService} from '../../services/languages.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(public languages: LanguagesService) { }

  ngOnInit(): void {
  }

}
