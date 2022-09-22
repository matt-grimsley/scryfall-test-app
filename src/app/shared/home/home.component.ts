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

  constructor(private data: DataService) {
    console.log('In constructor, imagePath is: ' + this.imagePath + '...')
  }

  ngOnInit(): void {
    console.log('In ngOnInit, imagePath is: ' + this.imagePath + '...')
    this.dataSub = this.data.getCard().subscribe((data) => {
      this.id = data.id;
      let image_uris = data.image_uris;
      this.imagePath = image_uris['normal']
      this.name = data.name;
      console.log('In dataSub lambda!!  imagePath is: ' + this.imagePath + '...')
    });
    console.log('In ngOnInit, after dataSub lambda, imagePath is: ' + this.imagePath + '...')
  }

  ngOnDestroy() : void {
    this.dataSub.unsubscribe();
  }
}
