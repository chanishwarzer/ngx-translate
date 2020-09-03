import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  param: { value: string; };
  constructor(private router: Router,
    translate: TranslateService,
   // private localStorageService: LocalStorageService
    ) {debugger
    // this language will be used as a fallback when a translation isn't found in the current language
    //translate.setDefaultLang('en');
    translate.addLangs(['en', 'he'])
  //   translate.loadTranslation(language).subscribe(response => {
  //     this.localStorageService.setItem('translations', JSON.stringify(response.data));
  //     translate.setTranslation(language, response.data);
  //     translate.use(language);
  // });
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');

    
    //set from ts
    // translate.setTranslation('en', {
    //   hello: 'hello !{{value}}'
    // });
    // translate.setTranslation('he', {
    //   hello: ' היי  {{value}}'
    // });
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
