import { Component } from '@angular/core';

import { MediaItemsService } from './media-items.service'

@Component({
  selector: 'mw-media-item-list',
  templateUrl: 'app/media-item-list.component.html',
  styleUrls: ['app/media-item-list.component.css']
})
export class MediaItemListComponent {

  mediaItems;

  constructor(private mediaItemService: MediaItemsService){}

  ngOnInit(){
    this.mediaItems = this.mediaItemService.get();
  }

  onMediaItemDelete(mediaItem) {
    this.mediaItemService.delete(mediaItem);
   }

 
}
