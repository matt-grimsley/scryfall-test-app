import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Card, CardInterface, ImageUris } from '../shared/card.model';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  baseCard: Card;
  Card: Card;

  dataSub: Subscription = new Subscription();
  searchValue: string = '';

  constructor(private data: DataService) {
    this.baseCard = new Card('', '', '');
    this.Card = new Card('', '', '');
  }

  ngOnInit(): void {
    this.dataSub = this.data.getFirstCard().subscribe((data) => {
      this.handleGetFirstCard(data);
    });
  }

  handleGetCard(data: CardInterface): void {
    this.Card.id = data.id;
    let image_uris = data.image_uris;
    this.Card.imagePath = image_uris['normal'];
  }

  handleGetFirstCard(data: CardInterface): void {
    this.baseCard.id = data.id;
    let image_uris = data.image_uris;
    this.baseCard.imagePath = image_uris['normal'];
    this.baseCard.name = data.name;
  }

  onSearch(searchValue: string): void {
    this.dataSub = this.data.fuzzySearch(searchValue).subscribe((card) => {
      this.handleGetCard(card);
    });
    this.searchValue = '';
  }

  ngOnDestroy(): void {
    this.dataSub.unsubscribe();
  }
}
