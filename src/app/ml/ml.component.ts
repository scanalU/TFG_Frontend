import { Component, OnInit, Input, Inject} from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { RestaurantService }  from '../restaurant.service';
import { Rest } from '../restaurant'


@Component({
  selector: 'app-ml',
  templateUrl: './ml.component.html',
  styleUrls: ['./ml.component.css']
})
export class MLComponent implements OnInit {

  rests: Rest[] = [];
  restObject: Object;
  private checkComputerVision : Boolean;
  private checkCustomVision : Boolean;
  private valueComputerVision;
  private valueCustomVision;
  private checkRestName : String;
  private valueRestName;

  constructor(private http: HttpClient, private restService: RestaurantService) { }

  ngOnInit() {

  }

  public addRest(restName: string): void {
    var checkedComp =<HTMLInputElement> document.getElementById("checkComputerVision");
    var checkedCust =<HTMLInputElement> document.getElementById("checkCustomVision");
    var checkedRestName = <HTMLInputElement> document.getElementById("restName");

    this.checkComputerVision =  checkedComp.checked;
    this.checkCustomVision = checkedCust.checked;
    this.checkRestName = checkedRestName.value;


    console.log ("Computer: ", this.checkComputerVision);
    console.log ("Custom: ", this.checkCustomVision);
    console.log ("RestName: ", this.checkRestName);

    this.http.post("https://localhost:44353/api/main",
    {
        "address": this.checkRestName,
        "computerVision": this.checkComputerVision,
        "customVision": this.checkCustomVision      
    })
    .subscribe(
      data  => {
      console.log("POST Request is successful ", data);
      console.log("data.valueOf.name");
      },
      error  => {
      console.log("Error", error);  
    }
    
    );

  }


}


