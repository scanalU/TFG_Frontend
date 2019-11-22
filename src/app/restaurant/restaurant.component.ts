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
      this.rest.restUrl = "https://www.google.com/maps/place/?q=place_id:" + this.rest.placeID;
    });
  }

  goToUrl(): void {
    window.open(this.rest.restUrl, "_blank");  }

  save(): void {
    this.restService.updateRest(this.rest)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }


}
