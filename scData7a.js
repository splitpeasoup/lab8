'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var totalCookiesByHour = 0;
//totalTotal
var netTotal = 0;
var name = 0;
var allLocations = [];
var totalCookies = 0;
new MakeLocation('First and Pike', 23, 65, 6.3);
new MakeLocation('Seatac Airport', 3, 24, 1.2);
new MakeLocation('Seattle Center', 11, 38, 3.7);
new MakeLocation('Capitol Hill', 20, 38, 2.3);
new MakeLocation('Alki', 2, 16, 4.6);



function populateTable(allLocations){

  var tableEl = document.getElementById('cookiestand');

  var trEl = document.createElement('tr');

  var tdEl = document.createElement('td');

  // var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
  var location = allLocations;


  tdEl.textContent = 'Hours';
  trEl.appendChild(tdEl);


  for( var i = 0; i < hours.length; i++) {

    tdEl.textContent = hours[i];//content
    trEl.appendChild(tdEl); //add cell to the row
  }
  tableEl.appendChild(trEl);//add row to the table

for (var j = 0; j < location.length; j++){

var cellContent = location[j];

tableEl.appendChild(tableRowMaker(cellContent));
}

}

function tableRowMaker(cellContent) {


  var trEl = document.createElement('tr');

  var tdEl = document.createElement('td');


  tdEl.textContent = cellContent.name;

  trEl.appendChild(tdEl);
  //iterate through array
  for(var i = 0; i < hours.length; i++) {

    this.tdEl.textContent = cellContent.cookiesSoldByHour[i];//content
    this.trEl.appendChild(tdEl); //add cell to the row
  }
  tdEl.textContent = this.cellContent.totalCookies;
  trEl.appendChild(tdEl);
   return trEl;//add row to the table
}
function MakeLocation( name, minCustPerHour, maxCustPerHour,
avgCookieSoldPerHour) {
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookieSoldPerHour = avgCookieSoldPerHour;
  //why is this an array?
  this.randCustByHour = [];
  this.cookiesSoldByHour = [];
  this.totalCookies = 0;
  allLocations.push(this);
  calcRandCustByHour: function() {
    for(var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustByHour[i]);

    }
  };
//method for cookies sold by hours
  calcCookiesSoldByHour: function() {
    for(var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[j]));
      console.log(this.cookiesSoldByHour);
    }

  };

  calcTotalCookies : function() {


    this.totalCookies = this.cookiesSoldByHour.reduce(function(a,b){
      return a + b;
    }, 0);
    alcRandCustByHour: function() {
      for(var i = 0; i < hours.length; i++) {
        this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
        console.log(this.randCustByHour[i]);

      }
    };
    //method for cookies sold by hours
    calcCookiesSoldByHour: function() {
      for(var j = 0; j < hours.length; j++) {
        this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[j]));
        console.log(this.cookiesSoldByHour);
      }

    };

    calcTotalCookies : function() {


      this.totalCookies = this.cookiesSoldByHour.reduce(function(a,b){
        return a + b;
      }, 0);


        console.log(this.totalCookies);
      return this.totalCookies;
    };

    //how to make this more generic to suite all locations
    render: function() {

      this.calcRandCustByHour();

      this.calcCookiesSoldByHour();

      this.calcTotalCookies();
  };


  // this.name = name;
  // this.minCustPerHour = minCustPerHour;
  // this.maxCustPerHour = maxCustPerHour;
  // this.avgCookieSoldPerHour = avgCookieSoldPerHour;
  // var cookiesSoldByHour =  [];
  // var randCustByHour = [];
  // calcRandCustByHour(minCustPerHour, maxCustPerHour);
  // // var cookiesSoldByHour =  [];
  // // var randCustByHour = [];
  // // calcRandCustByHour(this.minCustPerHour,this.maxCustPerHour);
  // // console.log(randCustByHour);
  // //
  // // calcCookiesSoldByHour(this.avgCookieSoldPerHour, this.randCustByHour);
  // //
  // // this.totalCookies = calcTotalCookies(cookiesSoldByHour);
  // //
  // // this.allLocations.push();
  // function makeStands( minCustPerHour, maxCustPerHour,
  // avgCookieSoldPerHour,randCustByHour){
  //
  //
  //   console.log(randCustByHour);
  //
  //   calcCookiesSoldByHour(avgCookieSoldPerHour, randCustByHour);
  //
  //   this.totalCookies = calcTotalCookies(cookiesSoldByHour);
  //
  //   this.allLocations.push();


}


// function calcRandCustByHour(minCustPerHour, maxCustPerHour) {
//  for(var i = 0; i < hours.length; i++) {
//    randCustByHour.push(Math.floor(Math.random() * (maxCustPerHour - minCustPerHour + 1)) + this.minCustPerHour);
//    console.log(randCustByHour);
//
//  }
// }
//
// function calcCookiesSoldByHour(avgCookieSoldPerHour, randCustByHour) {
//  for(var j = 0; j < hours.length; j++) {
//    cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[j]));
//    console.log(this.cookiesSoldByHour[j]);
//  }
// }
//
// function calcTotalCookies(cookiesSoldByHour) {
//
//  this.totalCookies = this.cookiesSoldByHour.reduce(function(a,b){
//    return a + b;
//  }, 0);
//
//    console.log(this.totalCookies);
//  return this.totalCookies;
// }

populateTable(allLocations);

// var FirstAndPike = {
//
//   name : 'First and Pike',
//   //creating my key value pairs inside of my object they are called properties
//   minCustPerHour : 23,
//   maxCustPerHour : 65,
//   avgCookieSoldPerHour : 6.3,
//
// }
// var Seatac = {
//   name: 'Seatac Airport',
//   //creating my key value pairs inside of my object they are called properties
//   minCustPerHour : 3,
//   maxCustPerHour :24,
//   avgCookieSoldPerHour : 1.2,
// }
//
// var SeattleCtr = {
//   name : 'Seattle Center',
//   //creating my key value pairs inside of my object they are called properties
//   minCustPerHour : 11,
//   maxCustPerHour : 38,
//   avgCookieSoldPerHour : 3.7,
// }
// var CapitolHill = {
//   name : 'Capitol Hill',
//   //creating my key value pairs inside of my object they are called properties
//   minCustPerHour : 20,
//   maxCustPerHour : 38,
//   avgCookieSoldPerHour : 2.3,
// }
// var Alki = {
//   name: 'Alki',
//   //creating my key value pairs inside of my object they are called properties
//   minCustPerHour : 2,
//   maxCustPerHour : 16,
//   avgCookieSoldPerHour : 4.6,
//  }
//
// var allLocations = [ FirstAndPike, Seatac, SeattleCtr, CapitolHill, Alki ];
//
//  // , var UserInput = {
//
//       name : this.username
//       minCustPerHour : this.userminCustomerPerHour;
//       maxCustPerHour : this.usermaxCustPerHour;
//       avgCookiesSoldPerHour : this.useravgCookiesSoldPerHour;
// }
