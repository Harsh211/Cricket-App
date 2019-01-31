import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OngoingMatchPage } from './ongoing-match';

@NgModule({
  declarations: [
    OngoingMatchPage,
  ],
  imports: [
    IonicPageModule.forChild(OngoingMatchPage),
  ],
})
export class OngoingMatchPageModule {}
