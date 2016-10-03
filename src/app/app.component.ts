import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';


@Component({
  template: `
  <ion-menu [content]="content">
   <ion-header>
  <ion-toolbar>
    <ion-title>Pages</ion-title>
  </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-list>
      <button ion-item>
        Login
      </button>
      <button ion-item>
        Signup
      </button>
    </ion-list>
  </ion-content>
</ion-menu>
  <ion-nav #content [root]="rootPage" swipeBackEnabled="false"></ion-nav>
  `
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}
