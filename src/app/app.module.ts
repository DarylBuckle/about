import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faAngular, faBootstrap, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin, faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faStackOverflow, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCode, faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGlobe, faEllipsisH, faMapMarkerAlt, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap, faAward, faBookOpen, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faLock, faLockOpen, faExternalLinkAlt, faAt } from '@fortawesome/free-solid-svg-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GroupComponent } from './group/group.component';
import { HeaderGroupComponent } from './header-group/header-group.component';
import { FooterComponent } from './footer/footer.component';
import { AboutScreenComponent } from './about-screen/about-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    GroupComponent,
    HeaderGroupComponent,
    FooterComponent,
    AboutScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(faAngular, faReact, faNodeJs, faCode, faLinkedin, faTwitter, faFacebookF, faInstagram, faGithub, faStackOverflow,
      faHome, faEnvelope, faGlobe, faEllipsisH, faMapMarkerAlt, faGraduationCap, faAward, faBookOpen, faChevronRight, faChevronLeft,
      faChevronUp, faLockOpen, faLock, faExternalLinkAlt, faBootstrap, faAt );
  }
}
