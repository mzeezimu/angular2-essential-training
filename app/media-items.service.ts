import { HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class MediaItemsService{

  constructor(private http: HttpClient){}

  /* get(){
    return this.http.get<mediaItemsResponse>('mediaItems').pipe(
      map(( response: mediaItemsResponse) => {
        return response.mediaItems;
      })
    );
  } */

  get(medium){
    let getOptions = {
      params: {
        medium
      }
    };
    return this.http.get<mediaItemsResponse>('mediaItems', getOptions).pipe(
      map(( response: mediaItemsResponse) => {
        return response.mediaItems;
      })
    );
  }

  add(mediaItem){
    this.mediaItems.push(mediaItem);
  }

  delete(mediaItem){
    let index = this.mediaItems.indexOf(mediaItem);
    if(index>= 0){
      this.mediaItems.splice(index,1);
    }
  }

  mediaItems = [
    {
      id: 1,
      name: "Firebug",
      medium: "Series",
      category: "Science Fiction",
      year: 2010,
      watchedOn: 1294166565384,
      isFavorite: false
    },
    {
      id: 2,
      name: "The Small Tall",
      medium: "Movies",
      category: "Comedy",
      year: 2015,
      watchedOn: null,
      isFavorite: true
    }, {
      id: 3,
      name: "The Redemption",
      medium: "Movies",
      category: "Action",
      year: 2016,
      watchedOn: null,
      isFavorite: false
    }, {
      id: 4,
      name: "Hoopers",
      medium: "Series",
      category: "Drama",
      year: null,
      watchedOn: null,
      isFavorite: true
    }, {
      id: 5,
      name: "Happy Joe: Cheery Road",
      medium: "Movies",
      category: "Action",
      year: 2015,
      watchedOn: 1457166565384,
      isFavorite: false
    }
  ];
}

interface mediaItem{
  id: number;
  name: string;
  medium: string;
  category: string;
  year: number;
  watchedOn: number;
  isFavorite: boolean;
}

interface mediaItemsResponse{
  mediaItems: mediaItem[];
}