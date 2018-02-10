import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { FilterPage } from '../pages/filter/filter';
import { MacroDetailPage } from '../pages/macro-detail/macro-detail';
import { ContributorsPage } from '../pages/contributors/contributors';
import { GlossaryPage } from '../pages/glossary/glossary';
import { LocatorPage } from '../pages/locator/locator';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';
import { SpecimensProvider } from '../providers/specimens/specimens';
import { SearchPipe } from '../pipes/search/search';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FilterPage,
    MacroDetailPage,
    ContributorsPage,
    GlossaryPage,
    LocatorPage,
    TabsPage,
    SearchPipe
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FilterPage,
    MacroDetailPage,
    ContributorsPage,
    GlossaryPage,
    LocatorPage,
    TabsPage
  ],
  providers: [
    SpecimensProvider,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
