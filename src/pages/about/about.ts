import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { User } from '../../model/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { TabsPage } from '../tabs/tabs';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  user = {} as User;
  //public key:string;

  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth, public alertController: AlertController, private storage: Storage){

  }

  showError(msg : string) {
    let alert = this.alertController.create({
      title: 'Error',
      subTitle: msg,
      buttons: ['OK']
   });
    alert.present();
 }

 loadData(user: User){
   //console.log("this.user.email1:"+ user.email);
  this.storage.get(user.email).then((val) =>{
    //console.log("stored aname is1:"+ val);
    this.storage.set(this.user.key, val );
    console.log("Your Username is", val);
  })
}

  login(user: User){
    this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
    .then(res => {
        this.navCtrl.setRoot(TabsPage);
      }, err=>{
        this.showError(JSON.stringify(err.message));
      })
  }

  register(){
    this.navCtrl.push('RegisterPage');
  }

}
