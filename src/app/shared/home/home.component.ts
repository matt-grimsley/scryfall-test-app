import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Card, ImageUris } from '../card.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  id: string = '';
  imagePath: string = '';
  name: string = '';
  dataSub: Subscription = new Subscription();
  searchValue: string = '';

  constructor(private data: DataService) {
    console.log('In constructor, imagePath is: ' + this.imagePath + '...');
  }

  ngOnInit(): void {
    console.log('In ngOnInit, imagePath is: ' + this.imagePath + '...');
    this.dataSub = this.data.getFirstCard().subscribe((data) => {
      this.handleGetCard(data);
    });
  }

  handleGetCard(data: Card): void {
    this.id = data.id;
    let image_uris = data.image_uris;
    this.imagePath = image_uris['normal'];
    this.name = data.name;
    console.log('In handleGetCard()  imagePath is: ' + this.imagePath + '...');
  }

  onSearch(searchValue: string): void {
    this.dataSub = this.data.fuzzySearch(searchValue).subscribe((card) => {
      this.handleGetCard(card);
    });
  }

  ngOnDestroy(): void {
    this.dataSub.unsubscribe();
  }
}
