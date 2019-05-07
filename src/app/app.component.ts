import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavigationBar } from '@ionic-native/navigation-bar/ngx';
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
      icon: 'trophy'
    },
    {
      title: 'Grateful',
      url: '/grateful',
      icon: 'text'
    },
    {
      title: 'Problem Solving',
      url: '/problem-solving',
      icon: 'thumbs-up'
    },
    {
      title: 'Quotes',
      url: '/quotes',
      icon: 'text'
    },
    {
      title: 'To Do',
      url: '/todo',
      icon: 'checkbox'
    },

  ];

  public footerPages = [
    {
      title: 'Settings',
      url: '/settings',
      icon: 'settings'
    },
    {
      title: 'About Us',
      url: '/about-us',
      icon: 'happy'
    },
    {
      title: 'Contact Us & Feedback',
      url: '/contact-us',
      icon: 'contact'
    }
  ]

  constructor(private platform: Platform, private splashScreen: SplashScreen, private statusBar: StatusBar, private navigationBar: NavigationBar) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.statusBar.hide();
      this.navigationBar.hideNavigationBar();
      
    });
  }
}
