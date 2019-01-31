import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestteamPage } from './testteam';
import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    TestteamPage,
  ],
  imports: [
    IonicPageModule.forChild(TestteamPage),
    SuperTabsModule,
  ],
})
export class TestteamPageModule {}
