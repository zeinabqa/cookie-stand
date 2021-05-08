//////////'use strict';
//hours array
/////////////const hours = ['6AM',
/////////'7AM', 
//////////'8AM', 
/////////'9AM',
//////////'10AM', 
////////'11AM', 
//////////'12AM', 
//////////'1PM', 
//////////'2PM',
/////////'3PM', 
///////////'4PM', 
/////////'5PM',
////////'5PM',
//////// '6PM', 
////////// '7PM'];
////////////
/////////
/////function random (min,max){
//////    return Math.floor(Math.random()*(max-min+1)+min);
//////////////////}
//////////////
//////////////
//creat an object:
//////////////////
/////////
///const seattle={
/////    name:'seattle',
////    maxHourlyCustomers:65,
///    minHourlyCustomers:23,
///    avgCookiesEchCustomer:6.3,
///    CustomerEachHour:[],
////    CookiesEachHour:[],
////    total:0,
////
// //calcate a random customer each hour 
/////calcCustomerEachHour : function  (){
/////for(let i=0; i<Hour.length;i++){
/////this.CustomerEachHour.push(random(this.minHourlyCustomers, this.maxHourlyCustomers))
/////}
//////};
 //////
//calcute a random num of cookies
///// calcCookiesEachHour : function (){
////  for(let i=0; i< Hour.length;i++){
////  this.CookiesEachHour.push(math.floor(this.CustomerEachHour[i]*this.avgCookiesEachCustomer));
////  this.total += this.CookiesEchHour [i];
//////  }
//////}; 
/////
/////rander: function()  {
//// let list1 = document.getElementById('seattle');
//// let pharaghrap = document .createElement('p');
//// pharaghrap.textContent = this .name ;
//// list1.appendChild(pharaghrap);
//// let ulElement = document.createElement('ul');
/// list1.appendChild(ulElement);
/// for(let i=0; 1<hours.length; i++){
////     let liElement = document .createElement ('li');
////     ulElement .appendChild(liElement);
 ///    liElement.textContent = `${hours[i]}:${this.CookiesEachHour[i]} cookes`
///
//// }
////   let totalItem=document.createElement('li');
////   ulElement.appendChild('totalItem');
///////   totalItem.textContent=`Total: ${this.total} cookies`
/////}
////}
///    console.log(seattle);
///    seattle.getCustomerEchHour();
///    seattle.getCookiesEChHour();
////    seattle.rander();
////
////  const tokyo={
////  name:'tokyo',
////  maxHourlyCustomers:24,
////  minHourlyCustomers:3,
////  avgCookiesEchCustomer:1.2,
////  CustomerEachHour:[],
/////   CookiesEachHour:[],
////   total:0,
////    
//calcate a random customer each hour 
////    calcCustomerEachHour : function  (){
////    for(let i=0; i<Hour.length;i++){
/////    this.CustomerEachHour.push(random(this.minHourlyCustomers, this.maxHourlyCustomers))
/////    }
///    };
////     
///    //calcute a random num of cookies
/// calcCookiesEachHour : function (){
/// for(let i=0; i< Hour.length;i++){
//// this.CookiesEachHour.push(math.floor(this.CustomerEachHour[i]*this.avgCookiesEachCustomer));
//// this.total += this.CookiesEchHour [i];
///// }
/////    }; 
///    
//////    rander: function()  {
////let list1 = document.getElementById('seattle');
////let pharaghrap = document .createElement('p');
////pharaghrap.textContent = this .name ;
////list1.appendChild(pharaghrap);
/////let ulElement = document.createElement('ul');
////list1.appendChild(ulElement);
////for(let i=0; 1<hours.length; i++){
//// let liElement = document .createElement ('li');
///// ulElement .appendChild(liElement);
//////liElement.textContent = `${hours[i]}:${this.CookiesEachHour[i]} cookes`
    
////}////
//////  let totalItem=document.createElement('li');
 //// ulElement.appendChild('totalItem');
//// totalItem.textContent=`Total: ${this.total} cookies`
////    }
//////    }
////  console.log(tokyo);
////  tokyo.getCustomerEchHour();
////  tokyo.getCookiesEChHour();
////  tokyo.rander();
/////
////const dubai={
///  name:'dubai',
//// maxHourlyCustomers:38,
/// minHourlyCustomers:11,
/// avgCookiesEchCustomer:3.7,
/// CustomerEachHour:[],
/// CookiesEachHour:[],
 ///  total:0,
        
//calcate a random customer each hour 
//  calcCustomerEachHour : function  (){
///  for(let i=0; i<Hour.length;i++){
/////   this.CustomerEachHour.push(random(this.minHourlyCustomers, this.maxHourlyCustomers))
////// }
//// };
////         
 //calcute a random num of cookies
////  calcCookiesEachHour : function (){
///  for(let i=0; i< Hour.length;i++){
//// this.CookiesEachHour.push(math.floor(this.CustomerEachHour[i]*this.avgCookiesEachCustomer));
//// this.total += this.CookiesEchHour [i];
//// }
///  }; 
////        
////rander: function()  {
////let list1 = document.getElementById('seattle');
//////// let pharaghrap = document .createElement('p');
////pharaghrap.textContent = this .name ;
////list1.appendChild(pharaghrap);
////let ulElement = document.createElement('ul');
////list1.appendChild(ulElement);
////for(let i=0; 1<hours.length; i++){
///let liElement = document .createElement ('li');
//// ulElement .appendChild(liElement);
////liElement.textContent = `${hours[i]}:${this.CookiesEachHour[i]} cookes`
        
/////}
//// let totalItem=document.createElement('li');
////  ulElement.appendChild('totalItem');
/////  totalItem.textContent=`Total: ${this.total} cookies`
//////  }
 //////  }
////  console.log(dubai);
////  dubai.getCustomerEchHour();
////  dubai.getCookiesEChHour();
///  dubai.rander();
/////
///  const paris={
/// name:'paris',
/// maxHourlyCustomers:38,
 ///minHourlyCustomers:20,
 ////avgCookiesEchCustomer:2.3,
/// CustomerEachHour:[],
//// CookiesEachHour:[],
// total:0,
            
//calcate a random customer each hour 
/// calcCustomerEachHour : function  (){
 ///for(let i=0; i<Hour.length;i++){
 ///// this.CustomerEachHour.push(random(this.minHourlyCustomers, this.maxHourlyCustomers))
  }
 //// };
             
  //calcute a random num of cookies
/// calcCookiesEachHour : function (){
/// for(let i=0; i< Hour.length;i++){
/// this.CookiesEachHour.push(math.floor(this.CustomerEachHour[i]*this.avgCookiesEachCustomer));
//// this.total += this.CookiesEchHour [i];
 //////}
 ///// }; 
            
 //// rander: function()  {
///// let list1 = document.getElementById('seattle');
///let pharaghrap = document .createElement('p');
////pharaghrap.textContent = this .name ;
////list1.appendChild(pharaghrap);
////let ulElement = document.createElement('ul');
////list1.appendChild(ulElement);
////for(let i=0; 1<hours.length; i++){
///// let liElement = document .createElement ('li');
//////ulElement .appendChild(liElement);
////// liElement.textContent = `${hours[i]}:${this.CookiesEachHour[i]} cookes`
 ///           
 //////}
 ////// let totalItem=document.createElement('li');
/////  ulElement.appendChild('totalItem');
//////   totalItem.textContent=`Total: ${this.total} cookies`
//////  }
/////  }
////  console.log(paris);
//// paris.getCustomerEchHour();
//// paris.getCookiesEChHour();
///// paris.rander();

 ///// const lima={
//// name:'lima',
//////maxHourlyCustomers:16,
///// minHourlyCustomers:2,
////  avgCookiesEchCustomer:4.6,
//// CustomerEachHour:[],
///// CookiesEachHour:[],
//// total:0,
                
//calcate a random customer each hour 
/// calcCustomerEachHour : function  (){
 /////for(let i=0; i<Hour.length;i++){
 //////this.CustomerEachHour.push(random(this.minHourlyCustomers, this.maxHourlyCustomers))
  //////}
  /////};
                 
  //calcute a random num of cookies
 //calcCookiesEachHour : function (){
 // for(let i=0; i< Hour.length;i++){
 //this.CookiesEachHour.push(math.floor(this.CustomerEachHour[i]*this.avgCookiesEachCustomer));
 ///this.total += this.CookiesEchHour [i];
 ////}
 ////}; 
                
 //// rander: function()  {
////let list1 = document.getElementById('seattle');
 ///let pharaghrap = document .createElement('p');
 ///pharaghrap.textContent = this .name ;
///list1.appendChild(pharaghrap);
////let ulElement = document.createElement('ul');
///list1.appendChild(ulElement);
///for(let i=0; 1<hours.length; i++){
//// let liElement = document .createElement ('li');
////ulElement .appendChild(liElement);
//////liElement.textContent = `${hours[i]}:${this.CookiesEachHour[i]} cookes`
            ///////}
 ///// let totalItem=document.createElement('li');
 /////ulElement.appendChild('totalItem');
//////totalItem.textContent=`Total: ${this.total} cookies`
/////// }
 /////}
  ////// console.log(lima);
  /////lima.getCustomerEchHour();
 ////lima.getCookiesEChHour();
 //////lima.rander();




'use strict';
console.log('hello my js file');

const hours=['6AM','7AM', '8AM', '9AM','10AM', '11AM', '12AM', '1PM', '2PM','3PM', '4PM', '5PM','5PM','6PM',  '7PM'];]

function randomNum(min,max){
    return Math.floor(Math.random() * (max -min +1)+ min);
}


let shop =  [];

function shop(locationName,mincustomers,maxcustomers,avgCookies){
    this.locationName=locationName;
    this.mincustomers=mincustomers;
    this.maxcustomers=maxcustomers;

    this.avgCookies =avgCookies;
    this.customerEachHour = [];
    this.cookiesEachHour= [];
    this.totalcookiesPerDay = [];

    shop.push (this);
}


 shop.prototype.calcCustomerEashHour =function (){
     for (let i = 0; i < hours.length; i++) {
       this.customerEachHour.push(randomNum(this.mincustomers , this.maxcustomers));
         
     }
     console.log(this.customerEachHour);
}

 

 shop.prototype.calcCookiesEachHour=function(){
     for (let i = 0; i < hours.length; i++) {
        this.cookiesEachHour.push(Math.floor(this.avgCookies *  this.customerEachHour [i]));
        this.totalcookiesPerDay+=this.cookiesEachHour[i];
    }  
     console.log(this . cookiesEachHour);
 }
   

 let seattle = new shop('Seattle','23','65','6.3');
 let tokyo = new shop('Tokyo','3','24','1.2');
 let dubai = new shop ('Dubai' ,'11','38','3.7');
 let paris = new shop ('Paris', '20','38','2.3');
 let lima = new shop ('Lima','2','16','4.6');
 
}
 console.log (shop);

 //get the parent 
 let parent=document.getElementById('parent');
 console.log(parent);

 let table=document.createElement('table');
 parent.appendchild(table);

 function MakeHeade(){
     let headerRow=document.createElement('tr');
     table.appendChild(headerRow);


let firstTh=document.createElement('th');
 headerRow.appendChild(firstTh);
firstTh.textContent = 'Name';
for (let i = 0; i < hours.length; i++) {
let thElement=document.createElement('th');
headerRow.appendChild(thElement);
thElement.textContent = hours [i];
}

let lastTh=document.createElement('th');
headerRow.appendChild(lastTh);
lastTh.textContent='Daily location total';

 }

 makeHeader ();

 shop.prototype.render=function(){
     let dataRow=document.createElement('tr');
     table.appendChild(dataRow);
      
     let nameData=document.createElement('td');
     dataRow.appendChild(nameData);
     nameData.textContent=this.locationName;

    // let tootalDataForEachshop=document.createElement('td');
     for (let i = 0; i < hours.length; i++) {
         let tdElement = document.createElement('td');
         dataRow.appendChild(tdElement);
     tdElement.textContent=this.cookiesEachHour [i];
         
     

     let totalDataForEachshop = document.createElement('td');
     dataRow.appendChild(totalDataForEachshop);
     totalDataForEachshop.textContent=this.totalcookiesPerDay;

    }
     for (let i = 0; i < shop.length; i++) {
        shops [i].calcCustomerEashHour();
        shops [i]. calcCookiesEachHour ();
        shops [i] . render ();
}

console.log (shop);

//the footer
 
function makefooter(){
    let footerRow=document.createElement('tr');
    table.appendChild(footerRow);

    let footerTh=document.createElement('th');
    footerRow.appendChild(footerTh);
    footerTh.textContent= 'Totals';

    
    for (let i = 0; i < hours.length; i++) {
  for (let j= 0; j < shops.length; j++) {
totalEachHour+=shops[j].cookiesEachHour[i];
     
      
  }
  console.log(totalEachHour);
        
    }

}
makefooter();


    

        


























 

    

  



