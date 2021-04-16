import {Component, NgModule, OnInit} from '@angular/core';
import {LanguagesService} from '../../services/languages.service';
import {AppComponent} from '../../app.component';
import {HeaderComponent} from '../../header/header.component';
import {GoogleAnalyticsComponent} from '../../google-analytics/google-analytics.component';
import {ContactComponent} from '../../contact/contact.component';
import {FooterComponent} from '../../footer/footer.component';
import {SkillsComponent} from '../skills/skills.component';
import {NotFoundComponent} from '../../not-found/not-found.component';
import {SidebarComponent} from '../../sidebar/sidebar.component';
import {LegalNoticeComponent} from '../../legal-notice/legal-notice.component';
import {ResumeComponent} from '../resume.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public languages: LanguagesService) { }

  ngOnInit(): void {
  }

}
