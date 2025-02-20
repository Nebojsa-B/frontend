import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { map, Observable, startWith } from 'rxjs';

export enum Languages {
  en = 'en',
  rs = 'rs'
}

@Injectable({
  providedIn: 'root'
})
export class TranslateConfigurationService {
  supportedLangues: string[] = ['en', 'rs'];

  defaultLanguage = 'en';

  constructor(private translateService: TranslateService) {
    this.defaultConfiguration();
  }

  defaultConfiguration() {
    this.translateService.addLangs(this.supportedLangues);
    this.translateService.setDefaultLang(this.defaultLanguage);
    this.translateService.use(this.defaultLanguage);
  }

  setLanguage(lang: Languages) {
    this.translateService.use(lang);
    localStorage.setItem('currentLanguage', lang);
    const language = localStorage.getItem('currentLanguage');
    this.defaultLanguage = String(language);
  }

  currentLanguageStream(): Observable<string> {
    return this.translateService.onLangChange.pipe(
      startWith({ lang: this.defaultLanguage }),
      map((value) => value.lang)
    );
  }

  getStream(value: string): Observable<string> {
    return this.translateService.get(value);
  }
}
