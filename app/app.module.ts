import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
import {  HttpClientModule } from '@angular/common/http';
=======
import { HttpClientModule } from '@angular/common/http';
>>>>>>> 1120c36ca6517148f50d62f3cb70d04327680aa7

import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component';
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';
import { MediaItemFormComponent } from './media-item-form.component';
<<<<<<< HEAD
import { MediaItemsService } from './media-items.service';
import { lookUpListToken, lookUpLists} from './providers';
=======
import { MediaItemService } from './media-item.service';
import { lookupListToken, lookupLists } from './providers';
>>>>>>> 1120c36ca6517148f50d62f3cb70d04327680aa7

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective,
    CategoryListPipe,
    MediaItemFormComponent
  ],
  providers: [
<<<<<<< HEAD
    MediaItemsService,
    { provide: lookUpListToken , useValue: lookUpLists }
=======
    MediaItemService,
    { provide: lookupListToken, useValue: lookupLists }
>>>>>>> 1120c36ca6517148f50d62f3cb70d04327680aa7
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}