import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MatchPage } from './match';

@NgModule({
  declarations: [
    //MatchPage,
    //OngoingMatchPage,
  ],
  imports: [
    IonicPageModule.forChild(MatchPage),
  ],
})
export class MatchPageModule {}
