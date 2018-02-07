import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { FilterPage } from '../filter/filter';
import { ContributorsPage } from '../contributors/contributors';
import { GlossaryPage } from '../glossary/glossary';
import { LocatorPage } from '../locator/locator';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FilterPage;
  tab3Root = ContributorsPage;
  tab4Root = GlossaryPage;
  tab5Root = LocatorPage;

  constructor() {

  }
}