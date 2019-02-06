import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'Firebase';
import { AboutPage } from '../pages/about/about';

export const FIREBASE_CONFIG ={
  apiKey: "AIzaSyCzaFH-Gcb30yOFAizhbvqogv-OgOEiMyo",
  authDomain: "iccproject-e441d.firebaseapp.com",
  databaseURL: "https://iccproject-e441d.firebaseio.com",
  projectId: "iccproject-e441d",
  storageBucket: "iccproject-e441d.appspot.com",
  messagingSenderId: "893978304747"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = AboutPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(FIREBASE_CONFIG);
  }
}
