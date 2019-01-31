import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [NewsProvider]
})
export class HomePage {
  public news = [];

  constructor(public navCtrl: NavController, public newsProvider:NewsProvider) {
      this.getLatest();
  }

  getLatest() {
    this.newsProvider.getNews()
    .then((data:any) => {
      this.news = data.articles;

      console.log("this.news is:"+this.news);
    });
  }
  //ionViewWillEnter(){
   // this.newsProvider.getNews().subscribe(news =>{this.news = news});
  //}
  //newsprovider.getnews(this.title, this.description).subscribe(news =>{console.log(news)});

}
