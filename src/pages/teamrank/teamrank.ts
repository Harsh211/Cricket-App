import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SuperTabsController } from 'ionic2-super-tabs';

/**
 * Generated class for the TeamrankPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teamrank',
  templateUrl: 'teamrank.html',
})
export class TeamrankPage {
    
  pages = [
    {pageName: 'TestteamPage', title: 'Test Ranking',icon:'flame', id: 'testTab'},
    {pageName: 'OditeamPage', title: 'ODI Ranking',icon:'help-circle', id: 'odiTab'},
    {pageName: 'T20teamPage', title: 'T20 Ranking',icon:'body', id: 't20Tab'},
  ];

  selectedTab =0;

  @ViewChild(SuperTabsController) superTabs: SuperTabsController;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  
  
}
