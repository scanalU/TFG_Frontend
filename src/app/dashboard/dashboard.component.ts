import { Component, OnInit } from '@angular/core';
import { RestaurantService }  from '../restaurant.service';
import { Rest }  from '../restaurant';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  rests: Rest[] = [];

  constructor(private restService: RestaurantService) { }

  ngOnInit() {
    this.getRestaurants();
  }

  getRestaurants(): void {
    this.restService.getRests()
      .subscribe(rests => this.rests = rests.slice(1, 5));
  }

}
