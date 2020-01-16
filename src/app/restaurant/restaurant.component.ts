import { Component, OnInit, Input, Inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RestaurantService }  from '../restaurant.service';
import { Rest } from '../restaurant'
import { DOCUMENT } from '@angular/common';
import { SelectControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  rest: Rest;
  urls: Array<string>;
  active1: boolean = false;
  active2: boolean = false;
  active3: boolean = false;
  activeAll: boolean = false;
  j: number = 0;
  defaultImage: string = "../../../src/assets/noimage.png";

  constructor(
    private route: ActivatedRoute,
    private restService: RestaurantService,
    private location: Location,
    @Inject(DOCUMENT) document
    ) { 
  }

  ngOnInit(): void  {
    document.addEventListener("DOMContentLoaded", function(event) { 

    });
    this.getRest();
    this.moreSome();
    this.change1();
    this.moreSome();
  }
  

  change1() {
    this.active1 = true;
    this.active2 = false;
    this.active3 = false;
    this.activeAll = false;


    this.moreSome();
  }

  change2() {
    this.active1 = false;
    this.active2 = true;
    this.active3 = false;
    this.activeAll = false;


    this.moreSome();
  }

  change3() {
    this.active1 = false;
    this.active2 = false;
    this.active3 = true;
    this.activeAll = false;


    this.moreSome();
  }

  changeToAll() {
    this.moreSome();
  }

  moreSome() {
    console.log("MORE SOME");
    var row1 = document.getElementById("row1");//Fotos 1-3
    var row2 = document.getElementById("row2"); //Fotos 4-6
    var moreText = document.getElementById("more");//Fotos 7-9
    var moreText1 = document.getElementById("more1"); //Fotos 10-12
    var moreText2 = document.getElementById("more2"); //Fotos 13-15
    var moreText3 = document.getElementById("more3"); //Fotos 16-18
    // var moreText4 = document.getElementById("more4"); //Fotos 19-21  

    var btnSome = document.getElementById("myBtnSome");
    var btnAll = document.getElementById("myBtnAll");
    row1.style.display = "table-row"
    row2.style.display = "table-row"
    moreText.style.display = "none"
    moreText1.style.display = "none"
    moreText2.style.display = "none"
    moreText3.style.display = "none"
    // moreText4.style.display = "none";

    if (this.active1 == true && this.activeAll == false) {
      console.log('Entra if 1');
      row1.style.display = "table-row";
      row2.style.display = "table-row";
      moreText.style.display = "none";
      moreText1.style.display = "none";
      moreText2.style.display = "none";
      moreText3.style.display = "none";
      // moreText4.style.display = "none";

      btnAll.innerText = "Ver todas las imágenes (" + this.j + ")";

      this.active1 = false;
      this.active2 = false;
      this.active3 = false;
      this.activeAll = false;

    } 
    else if (this.active2 == true)  {
      console.log('Entra if 2');
      row1.style.display = "none";
      row2.style.display = "none";
      moreText.style.display = "table-row";
      moreText1.style.display = "table-row";
      moreText2.style.display = "none";
      moreText3.style.display = "none";
      // moreText4.style.display = "none";

      btnAll.innerText = "Ver todas las imágenes (" + this.j + ")";

     
      this.active1 = false;
      this.active2 = false;
      this.active3 = false;
      this.activeAll = false;

    }

    else if (this.active3 == true)  {
      console.log('Entra if 3');
      row1.style.display = "none";
      row2.style.display = "none";
      moreText.style.display = "none";
      moreText1.style.display = "none";
      moreText2.style.display = "table-row";
      moreText3.style.display = "table-row";
      // moreText4.style.display = "table-row";

      btnAll.innerText = "Ver todas las imágenes (" + this.j + ")";

      this.active1 = false;
      this.active2 = false;
      this.active3 = false;
      this.activeAll = false;
    }

    else if (this.activeAll == false && this.active1 == false && this.active2 == false && this.active3 == false){
      console.log('Entra if 4');
      row1.style.display = "table-row";
      row2.style.display = "table-row";
      moreText.style.display = "table-row";
      moreText1.style.display = "table-row";
      moreText2.style.display = "table-row";
      moreText3.style.display = "table-row";
      // moreText4.style.display = "table-row";

      btnAll.innerText = "ver menos imágenes";
      this.active1 = false;
      this.active2 = false;
      this.active3 = false;
      this.activeAll = true;


    }

    else{
      console.log('Entra else');
      row1.style.display = "table-row";
      row2.style.display = "table-row";
      moreText.style.display = "none";
      moreText1.style.display = "none";
      moreText2.style.display = "none";
      moreText3.style.display = "none ";
      // moreText4.style.display = "none";
      btnAll.innerText = "Ver todas las imágenes (" + this.j + ")";
      this.active1 = false;
      this.active2 = false;
      this.active3 = false;
      this.activeAll = false;
    }

  }

  getRest(): void {
    this.urls = new Array;
    const id = + this.route.snapshot.paramMap.get('id');
    this.restService.getRest(id)
    .subscribe(rest => {
      this.rest = new Rest(rest);
      console.log('this.rest', this.rest);

      for (let i = 0; i < this.rest.photoUrl.length; i++) {
          this.urls.push(this.rest.photoUrl[i]);
          this.j++;
      }

      for (let i = this.urls.length; i < 14; i++){
          this.urls.push(this.defaultImage);
      }
      console.log('this.urls', this.urls); 
      
      this.rest.googleRestUrl = "https://www.google.com/maps/place/?q=place_id:" + this.rest.placeID;
    });
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
