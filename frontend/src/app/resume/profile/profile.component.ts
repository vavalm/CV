import {Component, OnInit} from '@angular/core';
import {LanguagesService} from '../../services/languages.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public age: number;

  constructor(public languages: LanguagesService) { }

  ngOnInit(): void {
    this.calculateAge();
  }

  public calculateAge(): void{
    let diffMiliSec = Date.now() - Date.parse("1995-12-18");
    this.age = Math.floor(diffMiliSec / 1000 / 60 / 60 / 24 / 365)
  }

}
