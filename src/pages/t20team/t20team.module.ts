import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { T20teamPage } from './t20team';
import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    T20teamPage,
  ],
  imports: [
    IonicPageModule.forChild(T20teamPage),
    SuperTabsModule,
  ],
})
export class T20teamPageModule {}
