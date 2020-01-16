import { Component, OnInit, Input, Inject} from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { RestaurantService }  from '../restaurant.service';

import { Rest } from '../restaurant'
import { MLResult } from '../mlResult';



@Component({
  selector: 'app-ml',
  templateUrl: './ml.component.html',
  styleUrls: ['./ml.component.css']
})
export class MLComponent implements OnInit {

  mlRes: MLResult;
  private checkComputerVision : Boolean;
  private checkCustomVision : Boolean;
  private valueComputerVision;
  private valueCustomVision;
  private checkRestName : String;
  private valueRestName;
  private truncClassical;
  private truncFastFood;
  private truncPremium;
  private truncMaxClassical;
  private truncMaxFastFood;
  private truncMaxPremium;
  private hasTerraceML;
  private hasTerraceGoogle;
  
  
  title = '';
  dataChart = null;
  type= 'PieChart';
  columnNames = ['Browser', 'Percentage'];
  options = {
    colors: ['#D0D32A', '#2AD3CB', '#2AD332', '#3355FF', '#ff3333'], is3D: true
  };
  width = 550;
  height = 400;


  constructor(private http: HttpClient, private route: ActivatedRoute,
      private restService: RestaurantService) { }

  ngOnInit() {
    document.getElementById("myBtn1").onclick = function() { 
      document.getElementById("finder2").style.display = "block"; 
    } 
    document.getElementById("myBtn2").onclick = function() { 
      document.getElementById("finder3").style.display = "block"; 
    } 
    document.getElementById("myBtn3").onclick = function() { 
      document.getElementById("finder4").style.display = "block"; 
    } 
    document.getElementById("myBtn4").onclick = function() { 
      document.getElementById("finder5").style.display = "block"; 
    } 
    document.getElementById("myBtn5").onclick = function() { 
      document.getElementById("finder6").style.display = "block"; 
    } 
    document.getElementById("myBtn6").onclick = function() { 
      document.getElementById("finder7").style.display = "block"; 
    } 
 
  }


  public addRest1(restName: string): void {
    var checkedComp =<HTMLInputElement> document.getElementById("checkComputerVision1");
    var checkedCust =<HTMLInputElement> document.getElementById("checkCustomVision1");
    var checkedRestName = <HTMLInputElement> document.getElementById("restName1");

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

        
        let result = new MLResult();


        Object.assign(result, data);

        this.title = result.restName;
        console.log(result.restName);
        this.truncClassical = this.truncateDecimals(result.totalClassical, 2)
        this.truncFastFood = this.truncateDecimals(result.totalFastFood, 2)
        this.truncPremium = this.truncateDecimals(result.totalPremium, 2)
        this.truncMaxClassical = this.truncateDecimals(result.maxClassical, 2)
        this.truncMaxFastFood = this.truncateDecimals(result.maxFastFood, 2)
        this.truncMaxPremium = this.truncateDecimals(result.maxPremium, 2)


        this.dataChart = [
          ['Classical', this.truncClassical],
          ['Fast Food', this.truncFastFood],
          ['Premium', this.truncPremium] 
        ]; 

        this.hasTerraceGoogle = result.hasTerraceGoogle.toString(); 
        this.hasTerraceML = result.hasTerraceML.toString(); 

        if (result.hasTerraceGoogle == 1 ? this.hasTerraceGoogle = "Yes" : this.hasTerraceGoogle = "No")
        if (result.hasTerraceML == 1 ? this.hasTerraceML = "Yes" : this.hasTerraceML = "No")
 
        this.mlRes = result;

        
         
      },
      error  => {
      console.log("Error", error);  
    }
    
    );
    
  }

  public addRest2(restName: string): void {
    var checkedComp =<HTMLInputElement> document.getElementById("checkComputerVision2");
    var checkedCust =<HTMLInputElement> document.getElementById("checkCustomVision2");
    var checkedRestName = <HTMLInputElement> document.getElementById("restName2");

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

        
        let result = new MLResult();


        Object.assign(result, data);

        this.title = result.restName;
        console.log(result.restName);
        this.truncClassical = this.truncateDecimals(result.totalClassical, 2)
        this.truncFastFood = this.truncateDecimals(result.totalFastFood, 2)
        this.truncPremium = this.truncateDecimals(result.totalPremium, 2)
        this.truncMaxClassical = this.truncateDecimals(result.maxClassical, 2)
        this.truncMaxFastFood = this.truncateDecimals(result.maxFastFood, 2)
        this.truncMaxPremium = this.truncateDecimals(result.maxPremium, 2)


        this.dataChart = [
          ['Classical', this.truncClassical],
          ['Fast Food', this.truncFastFood],
          ['Premium', this.truncPremium] 
        ]; 

        this.hasTerraceGoogle = result.hasTerraceGoogle.toString(); 
        this.hasTerraceML = result.hasTerraceML.toString(); 

        if (result.hasTerraceGoogle == 1 ? this.hasTerraceGoogle = "Yes" : this.hasTerraceGoogle = "No")
        if (result.hasTerraceML == 1 ? this.hasTerraceML = "Yes" : this.hasTerraceML = "No")
 
        this.mlRes = result;

        
         
      },
      error  => {
      console.log("Error", error);  
    }
    
    );
    
  }

  public addRest3(restName: string): void {
    var checkedComp =<HTMLInputElement> document.getElementById("checkComputerVision3");
    var checkedCust =<HTMLInputElement> document.getElementById("checkCustomVision3");
    var checkedRestName = <HTMLInputElement> document.getElementById("restName3");

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

        
        let result = new MLResult();


        Object.assign(result, data);

        this.title = result.restName;
        console.log(result.restName);
        this.truncClassical = this.truncateDecimals(result.totalClassical, 2)
        this.truncFastFood = this.truncateDecimals(result.totalFastFood, 2)
        this.truncPremium = this.truncateDecimals(result.totalPremium, 2)
        this.truncMaxClassical = this.truncateDecimals(result.maxClassical, 2)
        this.truncMaxFastFood = this.truncateDecimals(result.maxFastFood, 2)
        this.truncMaxPremium = this.truncateDecimals(result.maxPremium, 2)


        this.dataChart = [
          ['Classical', this.truncClassical],
          ['Fast Food', this.truncFastFood],
          ['Premium', this.truncPremium] 
        ]; 

        this.hasTerraceGoogle = result.hasTerraceGoogle.toString(); 
        this.hasTerraceML = result.hasTerraceML.toString(); 

        if (result.hasTerraceGoogle == 1 ? this.hasTerraceGoogle = "Yes" : this.hasTerraceGoogle = "No")
        if (result.hasTerraceML == 1 ? this.hasTerraceML = "Yes" : this.hasTerraceML = "No")
 
        this.mlRes = result;

        
         
      },
      error  => {
      console.log("Error", error);  
    }
    
    );
    
  }
  
  public addRest4(restName: string): void {
    var checkedComp =<HTMLInputElement> document.getElementById("checkComputerVision4");
    var checkedCust =<HTMLInputElement> document.getElementById("checkCustomVision4");
    var checkedRestName = <HTMLInputElement> document.getElementById("restName4");

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

        
        let result = new MLResult();


        Object.assign(result, data);

        this.title = result.restName;
        console.log(result.restName);
        this.truncClassical = this.truncateDecimals(result.totalClassical, 2)
        this.truncFastFood = this.truncateDecimals(result.totalFastFood, 2)
        this.truncPremium = this.truncateDecimals(result.totalPremium, 2)
        this.truncMaxClassical = this.truncateDecimals(result.maxClassical, 2)
        this.truncMaxFastFood = this.truncateDecimals(result.maxFastFood, 2)
        this.truncMaxPremium = this.truncateDecimals(result.maxPremium, 2)


        this.dataChart = [
          ['Classical', this.truncClassical],
          ['Fast Food', this.truncFastFood],
          ['Premium', this.truncPremium] 
        ]; 

        this.hasTerraceGoogle = result.hasTerraceGoogle.toString(); 
        this.hasTerraceML = result.hasTerraceML.toString(); 

        if (result.hasTerraceGoogle == 1 ? this.hasTerraceGoogle = "Yes" : this.hasTerraceGoogle = "No")
        if (result.hasTerraceML == 1 ? this.hasTerraceML = "Yes" : this.hasTerraceML = "No")
 
        this.mlRes = result;

        
         
      },
      error  => {
      console.log("Error", error);  
    }
    
    );
    
  }

  public addRest5(restName: string): void {
    var checkedComp =<HTMLInputElement> document.getElementById("checkComputerVision5");
    var checkedCust =<HTMLInputElement> document.getElementById("checkCustomVision5");
    var checkedRestName = <HTMLInputElement> document.getElementById("restName5");

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

        
        let result = new MLResult();


        Object.assign(result, data);

        this.title = result.restName;
        console.log(result.restName);
        this.truncClassical = this.truncateDecimals(result.totalClassical, 2)
        this.truncFastFood = this.truncateDecimals(result.totalFastFood, 2)
        this.truncPremium = this.truncateDecimals(result.totalPremium, 2)
        this.truncMaxClassical = this.truncateDecimals(result.maxClassical, 2)
        this.truncMaxFastFood = this.truncateDecimals(result.maxFastFood, 2)
        this.truncMaxPremium = this.truncateDecimals(result.maxPremium, 2)


        this.dataChart = [
          ['Classical', this.truncClassical],
          ['Fast Food', this.truncFastFood],
          ['Premium', this.truncPremium] 
        ]; 

        this.hasTerraceGoogle = result.hasTerraceGoogle.toString(); 
        this.hasTerraceML = result.hasTerraceML.toString(); 

        if (result.hasTerraceGoogle == 1 ? this.hasTerraceGoogle = "Yes" : this.hasTerraceGoogle = "No")
        if (result.hasTerraceML == 1 ? this.hasTerraceML = "Yes" : this.hasTerraceML = "No")
 
        this.mlRes = result;

        
         
      },
      error  => {
      console.log("Error", error);  
    }
    
    );
    
  }

  public addRest6(restName: string): void {
    var checkedComp =<HTMLInputElement> document.getElementById("checkComputerVision6");
    var checkedCust =<HTMLInputElement> document.getElementById("checkCustomVision6");
    var checkedRestName = <HTMLInputElement> document.getElementById("restName6");

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

        
        let result = new MLResult();


        Object.assign(result, data);

        this.title = result.restName;
        console.log(result.restName);
        this.truncClassical = this.truncateDecimals(result.totalClassical, 2)
        this.truncFastFood = this.truncateDecimals(result.totalFastFood, 2)
        this.truncPremium = this.truncateDecimals(result.totalPremium, 2)
        this.truncMaxClassical = this.truncateDecimals(result.maxClassical, 2)
        this.truncMaxFastFood = this.truncateDecimals(result.maxFastFood, 2)
        this.truncMaxPremium = this.truncateDecimals(result.maxPremium, 2)


        this.dataChart = [
          ['Classical', this.truncClassical],
          ['Fast Food', this.truncFastFood],
          ['Premium', this.truncPremium] 
        ]; 

        this.hasTerraceGoogle = result.hasTerraceGoogle.toString(); 
        this.hasTerraceML = result.hasTerraceML.toString(); 

        if (result.hasTerraceGoogle == 1 ? this.hasTerraceGoogle = "Yes" : this.hasTerraceGoogle = "No")
        if (result.hasTerraceML == 1 ? this.hasTerraceML = "Yes" : this.hasTerraceML = "No")
 
        this.mlRes = result;

        
         
      },
      error  => {
      console.log("Error", error);  
    }
    
    );
    
  }

  public addRest7(restName: string): void {
    var checkedComp =<HTMLInputElement> document.getElementById("checkComputerVision7");
    var checkedCust =<HTMLInputElement> document.getElementById("checkCustomVision7");
    var checkedRestName = <HTMLInputElement> document.getElementById("restName7");

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

        
        let result = new MLResult();


        Object.assign(result, data);

        this.title = result.restName;
        console.log(result.restName);
        this.truncClassical = this.truncateDecimals(result.totalClassical, 2)
        this.truncFastFood = this.truncateDecimals(result.totalFastFood, 2)
        this.truncPremium = this.truncateDecimals(result.totalPremium, 2)
        this.truncMaxClassical = this.truncateDecimals(result.maxClassical, 2)
        this.truncMaxFastFood = this.truncateDecimals(result.maxFastFood, 2)
        this.truncMaxPremium = this.truncateDecimals(result.maxPremium, 2)


        this.dataChart = [
          ['Classical', this.truncClassical],
          ['Fast Food', this.truncFastFood],
          ['Premium', this.truncPremium] 
        ]; 

        this.hasTerraceGoogle = result.hasTerraceGoogle.toString(); 
        this.hasTerraceML = result.hasTerraceML.toString(); 

        if (result.hasTerraceGoogle == 1 ? this.hasTerraceGoogle = "Yes" : this.hasTerraceGoogle = "No")
        if (result.hasTerraceML == 1 ? this.hasTerraceML = "Yes" : this.hasTerraceML = "No")
 
        this.mlRes = result;

        
         
      },
      error  => {
      console.log("Error", error);  
    }
    
    );
    
  }

  truncateDecimals = function (number, digits) {
    var multiplier = Math.pow(10, digits),
        adjustedNum = number * multiplier,
        truncatedNum = Math[adjustedNum < 0 ? 'ceil' : 'floor'](adjustedNum);

    return truncatedNum / multiplier;
};


}


