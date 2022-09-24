export class Card {
  constructor(
    public name: string,
    public imagePath: string,
    public id: string
  ) {}
}

export interface CardInterface {
  name: string;
  id: string;
  image_uris: ImageUris;
}

export interface ImageUris {
  art_crop: string;
  border_crop: string;
  large: string;
  normal: string;
  png: string;
  small: string;
}
