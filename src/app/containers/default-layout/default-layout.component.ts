import { Component, OnInit, AfterViewInit } from '@angular/core';
import { navItems } from '../../_nav';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {

  /**
   *
   */
  constructor(private translate: TranslateService) {
    const t = translate.getLangs();

  }


  param = { value: 'world' };
  lang = [{ id: 'en', label: 'English' }, { id: 'he', label: 'Hebrew' }]


  changeLanguages(id) {
    this.translate.use(id);
  }

  addWordToTranslate() {
    //set from ts  this remove the file and add enther??
    this.translate.setTranslation('en', {
      hello: 'hello !{{value}}'
    });
    this.translate.setTranslation('he', {
      hello: ' היי  {{value}}'
    });
  }
  public sidebarMinimized = false;
  public navItems = navItems;

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
}
