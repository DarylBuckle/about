import { Component, OnInit } from '@angular/core';
import { GroupComponent } from '../group/group.component';
import { HeaderGroupComponent} from '../header-group/header-group.component';
import { FooterComponent } from '../footer/footer.component';
import { PROFILE } from '../data';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-about-screen',
  templateUrl: './about-screen.component.html',
  styleUrls: ['./about-screen.component.scss']
})
export class AboutScreenComponent implements OnInit {
  profile = PROFILE;
  dob = new Date(1991, 1, 21);
  age = 0;
  hobbies = [
    {
      name: 'Coding',
      imagestyle: { 'background-position-x': 'left' },
      image: '../assets/images/hobby6.png',
    },
    {
      name: 'Formula 1',
      imagestyle: { 'background-position-x': 'center' },
      image: '../assets/images/hobby1.jpeg',
    },
    {
      name: 'Nintendo',
      imagestyle: { },
      image: '../assets/images/hobby2.jpeg',
    },
    {
      name: 'Running',
      imagestyle: { 'background-position-y': 'bottom' },
      image: '../assets/images/hobby3.jpeg',
    },
    {
      name: 'Dungeons & Dragons',
      imagestyle: { },
      image: '../assets/images/hobby4.jpeg',
    },
    {
      name: 'Snooker',
      imagestyle: { 'background-position-x': 'center' },
      image: '../assets/images/hobby5.jpeg',
    }
  ];

  constructor(private router: Router) {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0);
    });
   }

  ngOnInit(): void {
    this.setAge();
  }

  setAge(){
    const today = new Date();
    const totalmonths = (today.getMonth() - this.dob.getMonth()) +
        (12 * (today.getFullYear() - this.dob.getFullYear()));
    this.age = Math.floor(totalmonths / 12);
  }

}
