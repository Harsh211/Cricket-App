import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeamrankPage } from './teamrank';
import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    TeamrankPage,
  ],
  imports: [
    IonicPageModule.forChild(TeamrankPage),
    SuperTabsModule,
  ],
})
export class TeamrankPageModule {}
