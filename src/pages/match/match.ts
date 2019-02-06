import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ChatPage } from '../chat/chat';
import { User } from '../../model/user';
import { Storage } from '@ionic/storage';
//import { UrlSerializer } from 'ionic-angular/navigation/url-serializer';

/**
 * Generated class for the MatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-match',
  templateUrl: 'match.html',
})
export class MatchPage {

  user = {} as User;
  username:string = " ";
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App, private storage: Storage) {
  }

  ongoingMatch(){
    //console.log("ongoing math page")
    this.navCtrl.push("OngoingMatchPage");
  }

  logout(){
    this.storage.set(this.user.email, " ");
    this.app.getRootNav().setRoot(AboutPage);
  }

  joinRoom(user: User){
    this.storage.get(user.key).then((val) =>{
      console.log("Your Username is", val);
      this.username = val;
      this.navCtrl.push(ChatPage,{
        username: this.username
      });
    })
    //this.storage.get(user.key)
    //console.log(this.user.key)
  }

}
