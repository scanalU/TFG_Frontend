import { Component, OnInit, Input} from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { RestaurantService }  from '../restaurant.service';
import { Rest } from '../restaurant'


@Component({
  selector: 'app-rest-detail',
  templateUrl: './rest-detail.component.html',
  styleUrls: ['./rest-detail.component.css']
})
export class RestDetailComponent implements OnInit {
  @Input() rest: Rest;

  constructor(
    private route: ActivatedRoute,
    private restService: RestaurantService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getRest();
  }

  getRest(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.restService.getRest(id)
      .subscribe(rest => this.rest = rest);
  }

  save(): void {
    this.restService.updateRest(this.rest)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }


}
