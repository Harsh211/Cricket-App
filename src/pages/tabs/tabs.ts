import { Component } from '@angular/core';

//mport { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { MatchPage } from '../match/match';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MatchPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
