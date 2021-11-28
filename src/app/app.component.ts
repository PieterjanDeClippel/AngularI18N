import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private route: ActivatedRoute, private translateService: TranslateService) {
    const defaultLang = 'en';
    this.route.queryParams.subscribe((params) => {
      const lang = params['lang'];
      if (!!lang) {
        this.translateService.use(lang);
      } else {
        this.translateService.use(defaultLang);
      }
    });
  }

  title = 'i18n-angular';
}
