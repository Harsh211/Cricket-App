import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../model/user";
import { AngularFireAuth } from "angularfire2/auth";
import { AlertController } from 'ionic-angular';
//import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AboutPage } from '../about/about';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;
  inputtext: string;
  //key:string = 'user.email';

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth,public alertController: AlertController,private storage: Storage) {
  }


  saveData(){
    console.log("this.user.email:"+ this.user.email);
    this.storage.set(this.user.email, this.inputtext);
    //this.storage.set(this.user.key, this.inputtext);
  }

  showError(msg : string) {
    let alert = this.alertController.create({
      title: 'Error',
      subTitle: msg,
      buttons: ['OK']
   });
    alert.present();
 }
  showSuccess() {
    let alert = this.alertController.create({
      title: 'Registration Successful',
      subTitle: "You are Successfully registered, Please Login",
      buttons: [{
        text: "OK",
        handler: () => {
          this.navCtrl.push(AboutPage)
        }
      }]
  });
    alert.present();
  }

  register(user: User){
    this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password).then((res)=>{
      this.showSuccess();
    }, err=>{
      this.showError(JSON.stringify(err.message));
    })
  }

}
