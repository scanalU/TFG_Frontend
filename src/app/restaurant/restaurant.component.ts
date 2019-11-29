import { Component, OnInit, Input, Inject} from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { RestaurantService }  from '../restaurant.service';
import { Rest } from '../restaurant'
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  rest: Rest;
  private isType0Null: Boolean;
  private isType1Null: Boolean;
  private isType2Null: Boolean;  
  private isType3Null: Boolean;
  private isType4Null: Boolean;
  private isType5Null: Boolean;
  

  constructor(
    private route: ActivatedRoute,
    private restService: RestaurantService,
    private location: Location,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void  {
    this.getRest();
  }

  getRest(): void {
    const id = + this.route.snapshot.paramMap.get('id');
    this.restService.getRest(id)
    .subscribe(rest => {
      this.rest = new Rest(rest);
      console.log('this.rest', this.rest);
      this.isTypeNull();
      this.rest.googleRestUrl = "https://www.google.com/maps/place/?q=place_id:" + this.rest.placeID;
    });
  }
  
  isTypeNull(){

    this.isType0Null = this.rest.typeGoogleAPI0 === 'NULL';
    this.isType1Null = this.rest.typeGoogleAPI1 === 'NULL';
    this.isType2Null = this.rest.typeGoogleAPI2 === 'NULL';
    this.isType3Null = this.rest.typeGoogleAPI3 === 'NULL';
    this.isType4Null = this.rest.typeGoogleAPI4 === 'NULL';
    this.isType5Null = this.rest.typeGoogleAPI5 === 'NULL';
  }

  goToUrl(): void {
    window.open(this.rest.googleRestUrl, "_blank");  }

  save(): void {
    this.restService.updateRest(this.rest)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }


}
