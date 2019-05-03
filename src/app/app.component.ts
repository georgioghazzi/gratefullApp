import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Affirmations',
      url: '/affirmations',
      icon: 'home'
    },
    {
      title: 'Blessings',
      url: '/blessings',
      icon: 'list'
    },
    {
      title: 'Daily Evaluations',
      url: '/daily-evaluations',
      icon: 'list'
    },
    {
      title: 'Grateful',
      url: '/grateful',
      icon: 'list'
    },
    {
      title: 'Problem Solving',
      url: '/problem-solving',
      icon: 'list'
    },
    {
      title: 'Quotes',
      url: '/quotes',
      icon: 'list'
    },
    {
      title: 'To Do',
      url: '/todo',
      icon: 'list'
    },

  ];

  public footerPages=[
    {
      title: 'Settings',
      url: '/settings',
      icon: 'home'
    },
    {
      title: 'About Us',
      url: '/about-us',
      icon: 'home'
    },
    {
      title: 'Contact Us & Feedback',
      url: '/contact-us',
      icon: 'home'
    }
  ]

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
