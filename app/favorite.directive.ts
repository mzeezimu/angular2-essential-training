<<<<<<< HEAD
import { Directive , HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[mwFavorite]'

})
export class FavoriteDirective {

  @HostBinding('class.is-favorite') isFavorite = true;
  @HostBinding('class.is-favorite-hovering') hovering = false;
  @HostListener('mouseenter') onMouseEnter() {
    this.hovering = true;
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.hovering = false;
  }
  @Input() set mwFavorite(value) {
    this.isFavorite = value;
  }
}
=======
import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[mwFavorite]'
})
export class FavoriteDirective {
  @HostBinding('class.is-favorite') isFavorite = true;

  @HostBinding('class.is-favorite-hovering') hovering = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.hovering = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hovering = false;
  }
  
  @Input() set mwFavorite(value) {
    this.isFavorite = value;
  }
}
>>>>>>> 1120c36ca6517148f50d62f3cb70d04327680aa7
