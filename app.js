'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


function random(min ,max ) {
    return math.floor(math.random() * (max-min+1)+min );
}

const seattle = {
    locationNme: 'seattle',
    mincustomers : 23 ,
    maxcustomers : 65 ,
    avgcookies : 6.3,
    custmorEachHours : [],
    cookiesEachHour :[] ,
    total:0,
    
 //   calculate a random of cust every hour 
    calccustomersEachHour : function () {
        for (let i= 0; 1< hours.length; 1++ ){
            this.customerEachHour.push(random(this.mincustomers ,this.maxcustomers));
        }
    },
    calcCookiesEachHour:function () {
        for (let i= 0; i< hours.length; i++) {
         this.cookiesEachHour.push(Math.floor (this.customersEachHour [i] *this.avgcookies));
          //the total 
         this.total += this.cookiesEachHour[i];

        }


     },
     randerfunction : function () {
         //get the parent element
          let theparent= document .getElementById('parent');
          console.log (theparent);
          let shopName = document . creatElement ('h2');

          theparent.appendChild(shopName);
          shopName.textcontent = this.locationNme;

          //create new element ul 
          let unorderedlist = document.createElement('ul');
          theparent.appendChild(unorderedlist);

          //creating il items 
          for (let i=0;i < hours .length; i++){
           let listItem = document.createElement('li');
           unorderedlist.appendChild(listItem);
           listItem.textContent= $ {hours[i]} =$ {this.cookiesEachHour[i]} cookies .
          }


       ///creat element for the total 
       let thetotalItem = document.createElement ('li');
       unorderedlist.appendChild(totalItem);
    totalItem.textcontent = 'Total : $ {this.total} cookies 

     }

        
    }
 
console.log(seattle);
seattle.calccustomersEachHour();
seattle.calcCookiesEachHour();
seattle.randerfunction();

const Tokyo ={
   locationName : 'Tokyo',
   minCustmer : 3,
   maxCustmer : 24,
   avgCookies : 1.2,
   custmorEachHours : [],
   cookiesEachHours : [],
 
  //calculate a random of cust every hour
   calcCustmerEachHours : function(){
       for (let i = 0; 1< hours.lengt ;i++) {
           this.custmorEachHours[i] = (random(this.minCustmer,this.maxCustmer));
               this.calcCustmerEachHours.push(random(this.minCustmer,this.maxCustmer));
           }
           
       },
       calcCookiesEachHour:function() {
           for (let i = 0; i < hours.length; i++) {
               this.cookiesEachHours.push(Math.floor(this.cookiesEachHours[i]*this.avgCookies));
               
           }
       },
       renderfunction: function() {
           let theParent=document.getElementById('parent');
           console.log(theParent);

           let shopName=document.createElement('shop3');
           theParent.appendChild(shopName);
           shopName.textContent=this.locationName;
           let unorderedList =document.createElement('ul');
           theParent.appendChild(unorderedList);
           for (let i = 0; i < hours.length; i++) {
               let Item=document.createElement('il');
               unorderedList.appendChild(Item);
               Item.textContent = `${hours[i]}: ${this.cookiesEachHours[i]} cookies`
               
           }
           let lItem=document.createElement('il');
           unorderedList.appendChild(item);
           lItem.textContent =`total: ${this.total} cookies`
       }
   }

console.log(Tokyo);
Tokyo.calcCustmerEachHours();
Tokyo.calcCookiesEachHour();
Tokyo.renderfunction();



const Dubai ={
   locationName : 'Dubai',
   minCustmer : 11,
   maxCustmer : 38,
   avgCookies : 3.7,
   custmorEachHours : [],
   cookiesEachHours : [],
 

   calcCustmerEachHours : function(){
       for (let i = 0; 1< hours.lengt ;i++) {
           this.custmorEachHours[i] = (random(this.minCustmer,this.maxCustmer));
               this.calcCustmerEachHours.push(random(this.minCustmer,this.maxCustmer));
           }
           
       },
       calcCookiesEachHour:function() {
           for (let i = 0; i < hours.length; i++) {
               this.cookiesEachHours.push(Math.floor(this.cookiesEachHours[i]*this.avgCookies));
               
           }
       },
       renderfunction: function() {
           let theParent=document.getElementById('parent');
           console.log(theParent);

           let shopName=document.createElement('shop3');
           theParent.appendChild(shopName);
           shopName.textContent=this.locationName;
           let unorderedList =document.createElement('ul');
           theParent.appendChild(unorderedList);
           for (let i = 0; i < hours.length; i++) {
               let listItem=document.createElement('il');
               unorderedList.appendChild(listItem);
               listItem.textContent = `${hours[i]}: ${this.cookiesEachHours[i]} cookies`
               
           }
        

   }

    console.log(Dubai);
   Dubai.calcCustmerEachHours();
   Dubai.calcCookiesEachHour();
   Dubai.renderfunction();


const Paris ={
   locationName : 'Paris',
   minCustmer : 20,
   maxCustmer : 38,
   avgCookies : 2.3,
   custmorEachHours : [],
   cookiesEachHours : [],
   

   calcCustmerEachHours : function(){
       for (let i = 0; 1< hours.lengt ;i++) {
           this.custmorEachHours[i] = (random(this.minCustmer,this.maxCustmer));
               this.calcCustmerEachHours.push(random(this.minCustmer,this.maxCustmer));
           }
           
       },
       calcCookiesEachHour:function() {
           for (let i = 0; i < hours.length; i++) {
               this.cookiesEachHours.push(Math.floor(this.cookiesEachHours[i]*this.avgCookies));
               
           }
       },
       renderfunction: function() {
           let theParent=document.getElementById('parent');
           console.log(theParent);

           let shopName=document.createElement('shop4');
           theParent.appendChild(shopName);
           shopName.textContent=this.locationName;
           let unorderedList =document.createElement('ul');
           theParent.appendChild(unorderedList);
           for (let i = 0; i < hours.length; i++) {
               let listItem=document.createElement('il');
               unorderedList.appendChild(listItem);
               listItem.textContent = `${hours[i]}: ${this.cookiesEachHours[i]} cookies`
               
           }
           
   }

console.log(Paris);
Paris.calcCustmerEachHours();
Paris.calcCookiesEachHour();
Paris.renderfunction();


const Lima ={
   locationName : 'Lima',
   minCustmer : 2,
   maxCustmer : 16,
   avgCookies : 4.6,
   custmorEachHours : [],
   cookiesEachHours : [],
  

   calcCustmerEachHours : function(){
       for (let i = 0; 1< hours.lengt ;i++) {
           this.custmorEachHours[i] = (random(this.minCustmer,this.maxCustmer));
               this.calcCustmerEachHours.push(random(this.minCustmer,this.maxCustmer));
           }
           
       },
       calcCookiesEachHour:function() {
           for (let i = 0; i < hours.length; i++) {
               this.cookiesEachHours.push(Math.floor(this.cookiesEachHours[i]*this.avgCookies));
               
           }
       },
       renderfunction: function() {
           let theParent=document.getElementById('parent');
           console.log(theParent);

           let shopName=document.createElement('h2');
           theParent.appendChild(shopName);
           shopName.textContent=this.locationName;
           let unorderedList =document.createElement('ul');
           theParent.appendChild(unorderedList);
           for (let i = 0; i < hours.length; i++) {
               let listItem=document.createElement('il');
               unorderedList.appendChild(listItem);
               listItem.textContent = `${hours[i]}: ${this.cookiesEachHours[i]} cookies`
               
           }
           
   }

console .log(Lima);
Lima.calcCustmerEachHours();
Lima.calcCookiesEachHour();
Lima.renderfunction();
  
