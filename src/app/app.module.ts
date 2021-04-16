import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GoogleAnalyticsComponent } from './google-analytics/google-analytics.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ExperienceComponent } from './resume/experience/experience.component';
import { EducationComponent } from './resume/education/education.component';
import { ClientsComponent } from './resume/clients/clients.component';
import { SkillsComponent } from './resume/skills/skills.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './resume/profile/profile.component';
import {LanguagesService} from './services/languages.service';
import { HobbiesComponent } from './resume/hobbies/hobbies.component';
import { QualitiesComponent } from './resume/qualities/qualities.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { ResumeComponent } from './resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GoogleAnalyticsComponent,
    ContactComponent,
    FooterComponent,
    ExperienceComponent,
    EducationComponent,
    ClientsComponent,
    SkillsComponent,
    NotFoundComponent,
    ProfileComponent,
    HobbiesComponent,
    QualitiesComponent,
    SidebarComponent,
    LegalNoticeComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    LanguagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
