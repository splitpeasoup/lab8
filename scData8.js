'use strict';

//constructors! think of it like a specialized machine in a factory that creates new objects
//prototypes are the functionality that the machine adds to the objects

//we need to define our hours and store them
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var totalCookiesByHour = 0;
//totalTotal
var netTotal = 0;
var name = 0;
var randCustByHour = [];
var cookiesSoldByHour =  [];
var allLocations = [];
var totalCookies = 0;
//
var FirstAndPike = {

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

var allLocations = [ FirstAndPike, Seatac, SeattleCtr, CapitolHill, Alki ];
//
//  // , var UserInput = {
//
//       name : this.username
//       minCustPerHour : this.userminCustomerPerHour;
//       maxCustPerHour : this.usermaxCustPerHour;
//       avgCookiesSoldPerHour : this.useravgCookiesSoldPerHour;
// }

function tableRowMaker(cellContent) {

  var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

  var tableEl = document.getElementById('cookiestand');

  var trEl = document.createElement('tr');

  var tdEl = document.createElement('td');

  var trEl = document.createElement('tr');

  var tdEl2 = document.createElement('td');

  tdEl.textContent = this.cellContent.name;

  trEl.appendChild(tdEl);


  //iterate through array
  for(var i = 0; i < hours.length; i++) {

    this.tdEl.textContent = this.cellContent.cookiesSoldByHour[i];//content
    this.trEl.appendChild(tdEl); //add cell to the row
  }
    tdEl.textContent = this.cellContent.totalCookies;
    trEl.appendChild(tdEl);

   return trEl;//add row to the table
}

 function calcRandCustByHour() {
  for(var i = 0; i < hours.length; i++) {
    this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    console.log(this.randCustByHour[i]);

  }
  return this.randCustByHour;
}

function calcCookiesSoldByHour() {

  for(var j = 0; j < hours.length; j++) {
    this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[j]));
    console.log(this.cookiesSoldByHour[j]);
  }
  return this.cookiesSoldByHour;
}

function calcTotalCookies() {

  this.totalCookies = this.cookiesSoldByHour.reduce(function(a,b){
    return a + b;
  }, 0);

    console.log(this.totalCookies);
  return this.totalCookies;
}


function MakeLocation(name, minCustPerHour, maxCustPerHour,
avgCookieSoldPerHour) {

  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookieSoldPerHour = avgCookieSoldPerHour;

  this.randCustByHour = calcRandCustByHour();

  this.cookiesSoldByHour = calcCookiesSoldByHour();

  this.totalCookies = calcTotalCookies();

  // allLocations.push(this);

  return name, cookiesSoldByHour, totalCookies;
}


function populateTable( array ){

  var tableEl = document.getElementById('cookiestand');

  var trEl = document.createElement('tr');

  var tdEl = document.createElement('td');

  var tdEl2 = document.createElement('td');

  var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
  var locations = allLocations;

  tdEl.textContent = 'Hours';
  trEl.appendChild(tdEl);

var i = 0;
  for( ; i < hours.length; i++) {

    tdEl.textContent = hours[i];//content
    trEl.appendChild(tdEl);
    return trEl;//add cell to the row
  }
  tableEl.appendChild(trEl);//add row to the table
var j = 0;
for (var location = array; j < location.length; j++){

var cellContent = new MakeLocation(location[j]);
tableRowMaker(cellContent);
tableEl.appendChild(trEl);
return tableEl;
}

}
populateTable(allLocations);
// var firstAndPike = {'First and Pike',23,65,6.3};

// var seatac = ['Seatac Airport', 3,24,1.2];

// var seattleCtr = ('Seattle Center', 11,38,3.7);

// var capitolHill = ('Capitol Hill', 20, 38,2.3);

// var alki = ('Alki', 2, 16, 4.6);

//user input will be conditionally pushed to allLocations;
// var userInput = (user.name, user.minCustPerHour, user.maxCustPerHour, user.avgCookiesSoldPerHour);
