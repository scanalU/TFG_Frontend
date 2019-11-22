import { Component, OnInit } from '@angular/core';
import { RestaurantService }  from '../restaurant.service';
import { HttpClient } from '@angular/common/http'
import { Rest }  from '../restaurant';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  rests: Rest[] = [];

  constructor(private restService: RestaurantService, private http: HttpClient) { }

  ngOnInit() {
    //this.getRestaurants();
    this.getRests();
  }

  // getRestaurants(): void {
  //   this.restService.getRests()
  //     .subscribe(rests => this.rests = rests.slice(1, 5));
  // }
  getRests(): void{
    
    this.http.get("https://localhost:44353/api/values").subscribe((res) => {
      console.log(res)
    }, function(err){
      console.log('error', err);
    });

  }

}
