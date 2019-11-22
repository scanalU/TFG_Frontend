export class Rest {
        restID : number ;
        restName : string ;
        placeID : string;
        phoneNumber : string;
        address : string;
        rating : string;
        numReviews : string;
        priceLevel : string;
        timeOpenMon : string;
        timeOpenTue : string;
        timeOpenWed : string;
        timeOpenThu : string;
        timeOpenFri : string;
        timeOpenSat : string;
        timeOpenSun : string;
        typeGoogleAPI0 : string;
        typeGoogleAPI1 : string;
        typeGoogleAPI2 : string;
        typeGoogleAPI3 : string;
        typeGoogleAPI4 : string;
        typeGoogleAPI5 : string;
        photoUrl : string;
        restUrl : string

        constructor(props){
          this.restID = props.restID;
          this.restName = props.restName;
          this.placeID = props.placeID;
          this.phoneNumber = props.phoneNumber;
          this.address = props.address;
          this.rating = props.rating;
          this.numReviews = props.numReviews;  
          this.priceLevel = props.priceLevel;
          this.timeOpenMon = props.timeOpenMon;
          this.timeOpenTue = props.timeOpenTue;
          this.timeOpenWed = props.timeOpenWed;
          this.timeOpenThu = props.timeOpenThu;
          this.timeOpenFri = props.timeOpenFri;
          this.timeOpenSat = props.timeOpenSat;
          this.timeOpenSun = props.timeOpenSun;
          this.typeGoogleAPI0 = props.typeGoogleAPI0;
          this.typeGoogleAPI1 = props.typeGoogleAPI1;
          this.typeGoogleAPI2 = props.typeGoogleAPI2;
          this.typeGoogleAPI3 = props.typeGoogleAPI3;
          this.typeGoogleAPI4 = props.typeGoogleAPI4;
          this.typeGoogleAPI5 = props.typeGoogleAPI5;
          this.photoUrl = props.photoUrl;
          this.restUrl = props.restUrl;
        }
}

  