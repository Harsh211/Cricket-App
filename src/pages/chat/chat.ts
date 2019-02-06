import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { User } from '../../model/user';
import { Storage } from '@ionic/storage';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import 'rxjs/add/operator/map';
//import { Socket } from 'ng-socket-io';
//import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@ViewChild(Content) content: Content;

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})

export class ChatPage {

  user ={} as User;
  profile: string;
  username: string = " ";
  message: string = " ";
  s;
  messages: object[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public db: AngularFireDatabase) {
    this.getProfile(this.user);
    this.username = this.navParams.get("username");
    //console.log("ans is", this.username )
    this.s = db.list('/chat').valueChanges().subscribe( data=> {
      this.messages = data;
      
    });

  }

  getProfile(user: User){
    this.storage.get(user.email).then((val) =>{
      this.username = val;
      this.profile = val;
      //console.log("Your Username is", val);
    })
  }

  sendMessage() {
    this.db.list('/chat').push({
      username: this.username,
      message: this.message
    })
    this.message ='';
  }

  

}
