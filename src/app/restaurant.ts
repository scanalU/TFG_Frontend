export class Rest {
        restID : number ;
        restName : string ;
        placeID : string;
        phoneNumber : string;
        address : string;
        location: string;
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
        tag0 : string;
        tag1 : string;
        tag2 : string;
        tag3 : string;
        tag4 : string;
        tag5 : string;
        tag6 : string;
        tag7 : string;
        tag8 : string;
        tag9 : string;

        photoUrl : Array<string>;
        googleRestUrl : string
        description: string

        constructor(props){
          this.restID = props.restID;
          this.restName = props.restName;
          this.placeID = props.placeID;
          this.phoneNumber = props.phoneNumber;
          this.address = props.address;
          this.location = props.location;
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
          this.tag0 = props.tag0;
          this.tag1 = props.tag1;
          this.tag2 = props.tag2;
          this.tag3 = props.tag3;
          this.tag4 = props.tag4;
          this.tag5 = props.tag5;
          this.tag6 = props.tag6;
          this.tag7 = props.tag7;
          this.tag8 = props.tag8;
          this.tag9 = props.tag9;
          this.photoUrl = props.photoUrl;
          this.googleRestUrl = props.googleRestUrl;
          this.description = props.description;
        }
}

  