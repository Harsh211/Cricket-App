import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OditeamPage } from './oditeam';
import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    OditeamPage,
  ],
  imports: [
    IonicPageModule.forChild(OditeamPage),
    SuperTabsModule,
  ],
})
export class OditeamPageModule {}
