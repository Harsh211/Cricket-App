import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { Storage } from '@ionic/storage';
import { User } from '../../model/user';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  user = {} as User;
  constructor(public navCtrl: NavController, public app: App, private storage: Storage) {

  }

  teamRank(){
    this.navCtrl.push("TeamrankPage");
  }

  logout(){
    this.storage.set(this.user.email, " ");
    this.app.getRootNav().setRoot(AboutPage);
    //this.navCtrl.setRoot(AboutPage);
    //const root = this.app.getRootNav();
   // root.popToRoot();
  }

}
