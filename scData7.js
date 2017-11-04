'use strict';

//constructors! think of it like a specialized machine in a factory that creates new objects
//prototypes are the functionality that the machine adds to the objects

//we need to define our hours and store them
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var allLocations = [];
var cookieStand = document.getElementById('cookiestand');
var storeForm = document.getElementById('storeform');





// var totalCookiesByHour = 0;
// //totalTotal
// var netTotal = 0;
// var name = 0;
// var randCustByHour = 0;
// var maxCustPerHour = 0;
// var minCustPerHour = 0;
// var cookiesSoldByHour = 0;
// 

// 

// var totalCookies = 0;

function MakeLocation(name, minCustPerHour, maxCustPerHour,
  avgCookieSoldPerHour) {
    //name, minCustPerHour, maxCustPerHour,
    //avgCookieSoldPerHour
  
    this.name = name;
    this.minCustPerHour = minCustPerHour;
    this.maxCustPerHour = maxCustPerHour;
    this.avgCookieSoldPerHour = avgCookieSoldPerHour;
    this.randCustByHour = [];
    this.cookiesSoldByHour =  [];
    this.totalCookies = 0;
    this.calcRandCustByHour= function() {
      for(var i = 0; i < hours.length; i++) {
        var randomNum = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
        console.log('random number for customers ' + randomNum);
        this.randCustByHour.push(randomNum);
        // this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
        console.log('randCustByHour'+this.randCustByHour[i]);
     
      }
    }
      this.calcRandCustByHour();

    this.calcCookiesSoldByHour = function() {
        
         for(var j = 0; j < hours.length; j++) {
           this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[j]));
           console.log('cookiesSoldByHour' + this.cookiesSoldByHour[j]);
         }
         
        },
        this.calcCookiesSoldByHour();
        
     this.calcTotalCookies = function() {
        
         this.totalCookies = this.cookiesSoldByHour.reduce(function(a,b){
           return a + b;
         }, 0);
        
           console.log('totalCookies'+this.totalCookies);
         return this.totalCookies;
        }
     
      console.log('yay');
     
    this.calcTotalCookies();
  allLocations.push(this);
  
      }

  // function getEventTarget(e) {
  //   if( ! e ) {
  //     e = window.event ;
  //   }
  //   if (event.preventDefault){ 
      
  //     event.preventDefault (); 
  //   }

  //   else {
  //     event.returnValue =false;
  //   }
  //   return e.target ;
  // }

  function UserInput(event) {
      //name, minCustPerHour, maxCustPerHour,
      //avgCookieSoldPerHour
      console.log(event);
      event.preventDefault();
    
      this.name = event.target.storename.value ;
      this.minCustPerHour = event.target.mincust.value;
      this.maxCustPerHour = event.target.maxcust.value;
      this.avgCookieSoldPerHour = event.target.avgcook.value;
      this.randCustByHour = [];
      this.cookiesSoldByHour =  [];
      this.totalCookies = 0;
      this.calcRandCustByHour= function() {
        for(var i = 0; i < hours.length; i++) {
          var randomNum = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
          console.log('random number for customers ' + randomNum);
          this.randCustByHour.push(randomNum);
          // this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
          console.log('randCustByHour'+this.randCustByHour[i]);
       
        }
      }
        this.calcRandCustByHour();
  
      this.calcCookiesSoldByHour = function() {
          
           for(var j = 0; j < hours.length; j++) {
             this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[j]));
             console.log('cookiesSoldByHour' + this.cookiesSoldByHour[j]);
           }
           
          },
          this.calcCookiesSoldByHour();
          
       this.calcTotalCookies = function() {
          
           this.totalCookies = this.cookiesSoldByHour.reduce(function(a,b){
             return a + b;
           }, 0);
          
             console.log('totalCookies'+this.totalCookies);
           return this.totalCookies;
          }
       
        console.log('yay');
       
      this.calcTotalCookies();
      allLocations.length = 0;
    allLocations.push(this);
    populateTable(allLocations);
    
    }
    storeform.addEventListener('submit', UserInput);

new MakeLocation('First and Pike', 23, 65, 6.3);
new MakeLocation('Seatac Airport', 3, 24, 1.2);
 new MakeLocation('Seattle Center', 11, 38, 3.7);
 new MakeLocation('Capitol Hill', 20, 38, 2.3);
 new MakeLocation('Alki', 2, 16, 4.6);
storeform.addEventListener('submit', UserInput);

function tableHours(){
  
  
    var tdEl = document.createElement('td');
  
    var trEl = document.createElement('tr');
  
    tdEl.textContent = 'Hours';
    trEl.appendChild(tdEl);
    console.log(tdEl+ 'first tdEl');
    
    
    for( var i = 0; i < hours.length; i++) {
      
      
        var tdEl = document.createElement('td');
    
        tdEl.textContent = hours[i];//content
        trEl.appendChild(tdEl);
        console.log(trEl+'hours trEl');//add cell to the row
      }
      var tdEl2 = document.createElement('td');
      tdEl2.textContent = 'Daily Totals';
      trEl.appendChild(tdEl2);
      cookieStand.appendChild(trEl);
    }
  tableHours();

populateTable(allLocations);


function tableBody(){
  for(var j=0; j< allLocations.length; j++){

  var trEl = document.createElement('tr');

  var tdEl = document.createElement('td');
 
    tdEl.textContent = allLocations[j].name;
  
    trEl.appendChild(tdEl);
  

    for(var i = 0; i < hours.length; i++) {
      
      var tdEl = document.createElement('td');
  
  tdEl.textContent = allLocations[j].cookiesSoldByHour[i];//content
      trEl.appendChild(tdEl); //add cell to the row
    }
    var tdEl = document.createElement('td');
     
tdEl.textContent = allLocations[j].totalCookies;;
      trEl.appendChild(tdEl);
cookiestand.appendChild(trEl);
  }
}

function populateTable(allLocations){
  console.log('asdfasfd');
 

  var trEl = document.createElement('tr');

  var tdEl = document.createElement('td');


  tableBody();
}









