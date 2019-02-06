import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';
import { AboutPage } from '../about/about';
import { User } from '../../model/user';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [NewsProvider]
})
export class HomePage {
  public news = [];
  user = {} as User;
  profile: string;

  constructor(public navCtrl: NavController, public newsProvider:NewsProvider, public app: App, private storage: Storage) {
      this.getProfile(this.user);
      this.getLatest();
  }

  getProfile(user: User){
    this.storage.get(user.key).then((val) =>{
      this.profile = val;
      //console.log("Your Username is", val);
    })
  }

  getLatest() {
    this.newsProvider.getNews()
    .then((data:any) => {
      this.news = data.articles;

      //console.log("this.news is:"+this.news);
    });
  }

  logout(){
    this.storage.set(this.user.email, " ");
    this.app.getRootNav().setRoot(AboutPage);
  }
  //ionViewWillEnter(){
   // this.newsProvider.getNews().subscribe(news =>{this.news = news});
  //}
  //newsprovider.getnews(this.title, this.description).subscribe(news =>{console.log(news)});

}
