import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardInterface } from './card.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  mainset = 'd94c15b7-6c8f-45a6-8734-975e3e3b790c';
  showcase = '9187f4ea-27f2-4f94-b783-6992087d64a4';

  //   getCard(): Card {
  //     let c!: Card;
  //     this.http
  //       .get<Card>(
  //         'https://api.scryfall.com/cards/named?exact=' +
  //           'Ivy, Gleeful Spellthief'
  //       )
  //       .subscribe((data) => {
  //         console.log(data.name);
  //         console.log(data.image_uris);
  //         console.log(data.id);
  //         let image_uris = data.image_uris;
  //         const obj = image_uris['normal'];
  //         console.log(obj);
  //       });

  //     return c;
  //   }
  // }

  getFirstCard(): Observable<CardInterface> {
    return this.http.get<CardInterface>(
      'https://api.scryfall.com/cards/' + this.mainset
    );
  }

  fuzzySearch(searchValue: string): Observable<CardInterface> {
    let s = encodeURI(searchValue);
    return this.http.get<CardInterface>(
      'https://api.scryfall.com/cards/named?fuzzy=' + s
    );
  }
}
