import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MatchPage } from '../pages/match/match';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { ChatPage } from '../pages/chat/chat';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NewsProvider } from '../providers/news/news';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
//import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
//const config: SocketIoConfig = { url: 'http://localhost:8101', options:{} };

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MatchPage,
    ChatPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    SuperTabsModule.forRoot(),
    IonicModule.forRoot(MyApp, {
      // Configs for your app
      tabsHideOnSubPages: true
      // ...
    }),
    
    IonicStorageModule.forRoot(),
    //SocketIoModule.forRoot(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MatchPage,
    ChatPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NewsProvider,
    SQLite,
    HttpClient,
    HttpModule

  ]
})
export class AppModule {}
