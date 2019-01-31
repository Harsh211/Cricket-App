import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User } from '../../model/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { TabsPage } from '../tabs/tabs';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  user = {} as User;
  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth) {

  }

  async login(user: User){
    try{
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then(user => {
        if(result){
          this.navCtrl.setRoot(TabsPage);
        }
      })
    }
    catch (e){
      console.error(e);
    }
  }

  register(){
    this.navCtrl.push('RegisterPage');
  }

}
