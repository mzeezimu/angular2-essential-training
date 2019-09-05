<<<<<<< HEAD
import { Component, Inject } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms'

import { MediaItemsService } from './media-items.service';
import { lookUpListToken } from './providers';

@Component({
  selector: 'mw-media-item-form',
  templateUrl: 'app/media-item-form.component.html',
  styleUrls: ['app/media-item-form.component.css']
})
export class MediaItemFormComponent {

  form;

  constructor(
    private formBuilder: FormBuilder, 
    private mediaItemsService : MediaItemsService,
    @Inject(lookUpListToken) public lookUpLists ){

  }

  ngOnInit(){
    this.form = this.formBuilder.group({
      medium: this.formBuilder.control('Movies'),
      name: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')]) ),
      category: this.formBuilder.control(''),
      year: this.formBuilder.control('', this.yearValidator),
    });
  }
  
    
    yearValidator(control){
      if(control.value.trim().length == 0){
        return null
      }
      let year = parseInt(control.value);
      let minYear = 1800;
      let maxYear = 2500;

      if(year >= minYear && year <= maxYear){
        return null;
      }else{
        return{'year': {
          'min' : minYear,
          'max' : maxYear
        } };
      }

    }

  onSubmit(mediaItem){
    this.mediaItemsService.add(mediaItem);
    console.log(mediaItem + ' has been added');
  }
}
=======
import { Component, Inject } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

import { MediaItemService } from './media-item.service';
import { lookupListToken } from './providers';

@Component({
  selector: 'mw-media-item-form',
  templateUrl: 'app/media-item-form.component.html',
  styleUrls: ['app/media-item-form.component.css']
})
export class MediaItemFormComponent {
  form;

  constructor(
    private formBuilder: FormBuilder,
    private mediaItemService: MediaItemService,
    @Inject(lookupListToken) public lookupLists) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      medium: this.formBuilder.control('Movies'),
      name: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      category: this.formBuilder.control(''),
      year: this.formBuilder.control('', this.yearValidator),
    });
  }

  yearValidator(control) {
    if (control.value.trim().length === 0) {
      return null;
    }
    let year = parseInt(control.value);
    let minYear = 1800;
    let maxYear = 2500;
    if (year >= minYear && year <= maxYear) {
      return null;
    } else {
      return {
        'year': {
          min: minYear,
          max: maxYear
        }
      };
    }
  }

  onSubmit(mediaItem) {
    this.mediaItemService.add(mediaItem);
  }
}
>>>>>>> 1120c36ca6517148f50d62f3cb70d04327680aa7
