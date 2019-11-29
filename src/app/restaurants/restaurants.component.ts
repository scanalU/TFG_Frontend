import { Component, OnInit } from '@angular/core';
import { Rest } from '../restaurant';
import { RestaurantService } from '../restaurant.service';
import { bodyParser }  from 'body-parser'


@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  rests: Rest[];
  selectedRest: Rest;


  constructor(private restService: RestaurantService) { }
  

  ngOnInit() {
    this.getRestsFromDB();
  }

  onSelect(rest: Rest): void {
    this.selectedRest = rest;
    window.open("https://localhost:4200/restaurant/" + rest.restID, "_blank");
  }

  getRestsFromDB(){
    this.restService.getRestsFromDB()
    .subscribe(rests => {
      console.log(rests);
      this.rests = rests;
    }) 
  }

  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.restService.addRest({ name } as Rest)
  //     .subscribe(rest => {
  //       this.rests.push(rest);
  //     });
  // }

  delete(rest: Rest): void {
    this.rests = this.rests.filter(h => h !== rest);
    this.restService.deleteRest(rest).subscribe();
  }


}
