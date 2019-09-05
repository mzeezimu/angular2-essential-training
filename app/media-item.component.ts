<<<<<<< HEAD
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: 'app/media-item.component.html',
  styleUrls: ['app/media-item.component.css']
})
export class MediaItemComponent { 
  @Input() mediaItem;
  @Output() delete = new EventEmitter();

  onDelete(){
    this.delete.emit(this.mediaItem);
    console.log('Deleted');
  }

}
=======
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: 'app/media-item.component.html',
  styleUrls: ['app/media-item.component.css']
})
export class MediaItemComponent {
  @Input() mediaItem;
  @Output() delete = new EventEmitter();

  onDelete() {
    this.delete.emit(this.mediaItem);
  }
}
>>>>>>> 1120c36ca6517148f50d62f3cb70d04327680aa7
