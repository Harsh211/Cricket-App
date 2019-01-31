import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the NewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsProvider {
  apikey = "2d7a1268584049a5a0f6422a6cf0829d";
  url;// = 'https://newsapi.org/v2/everything?sources=espn-cric-info&apiKey='+apikey;

  constructor(public http: HttpClient) {
    console.log('Hello NewsProvider Provider');
    this.url = 'https://newsapi.org/v2/everything?sources=espn-cric-info&apiKey='+this.apikey;
  }

  getNews() {
    return new Promise(resolve => {
      this.http.get(this.url).subscribe((data:any) => {
        console.log("news response is:"+JSON.stringify(data));
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
