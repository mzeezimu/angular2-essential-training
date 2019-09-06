import { Component } from '@angular/core';

import { MediaItemsService } from './media-items.service'

@Component({
  selector: 'mw-media-item-list',
  templateUrl: 'app/media-item-list.component.html',
  styleUrls: ['app/media-item-list.component.css']
})
export class MediaItemListComponent {

  medium = '';
  mediaItems = [];

  constructor(private mediaItemService: MediaItemsService){}

 /*  ngOnInit(){
    this.mediaItemService.get().subscribe(mediaItems => {
      this.mediaItems = mediaItems;
    });
  } */

  ngOnInit(){
    this.getMediaItems(this.medium)
  }

  onMediaItemDelete(mediaItem) {
    this.mediaItemService.delete(mediaItem);
   }

   getMediaItems(medium){
     this.medium = medium;
     this.mediaItemService.get(medium).
         subscribe(mediaItems => {
           this.mediaItems = mediaItems;

         });

   }

 
}
