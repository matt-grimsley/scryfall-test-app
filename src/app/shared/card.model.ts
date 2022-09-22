// export class Card {
//   constructor(
//     public name: string,
//     public image_uris: string[],
//     public artist: string
//   ) {}
// }

export interface Card {
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