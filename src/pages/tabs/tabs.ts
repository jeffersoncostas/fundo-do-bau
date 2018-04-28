import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { StyleGuidePage } from '../style-guide/style-guide'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  about = AboutPage;
  home = 'HomePage';
  contact = 'ContactPage';
  tab4 = 'StyleGuidePage'

  constructor() {

  }

  click(): void {

  }
}
