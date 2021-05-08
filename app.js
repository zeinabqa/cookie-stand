'use strict';
//hours array
const hours = ['6AM'
, '7AM', 
'8AM', 
'9AM',
'10AM', 
'11AM', 
'12AM', 
'1PM', 
'2PM',
'3PM', 
'4PM', 
'5PM',
'5PM',
 '6PM', 
 '7PM'];


function random (min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}


//creat an object:


const seattle={
    name:'seattle',
    maxHourlyCustomers:65,
    minHourlyCustomers:23,
    avgCookiesEchCustomer:6.3,
    CustomerEachHour:[],
    CookiesEachHour:[],
    total:0,

 //calcate a random customer each hour 
calcCustomerEachHour : function  (){
for(let i=0; i<Hour.length;i++){
this.CustomerEachHour.push(random(this.minHourlyCustomers, this.maxHourlyCustomers))
}
};
 
//calcute a random num of cookies
 calcCookiesEachHour : function (){
  for(let i=0; i< Hour.length;i++){
  this.CookiesEachHour.push(math.floor(this.CustomerEachHour[i]*this.avgCookiesEachCustomer));
  this.total += this.CookiesEchHour [i];
  }
}; 

rander: function()  {
 let list1 = document.getElementById('seattle');
 let pharaghrap = document .createElement('p');
 pharaghrap.textContent = this .name ;
 list1.appendChild(pharaghrap);
 let ulElement = document.createElement('ul');
 list1.appendChild(ulElement);
 for(let i=0; 1<hours.length; i++){
     let liElement = document .createElement ('li');
     ulElement .appendChild(liElement);
     liElement.textContent = `${hours[i]}:${this.CookiesEachHour[i]} cookes`

 }
   let totalItem=document.createElement('li');
   ulElement.appendChild('totalItem');
   totalItem.textContent=`Total: ${this.total} cookies`
}
}
    console.log(seattle);
    seattle.getCustomerEchHour();
    seattle.getCookiesEChHour();
    seattle.rander();

    const tokyo={
  name:'tokyo',
  maxHourlyCustomers:24,
  minHourlyCustomers:3,
  avgCookiesEchCustomer:1.2,
  CustomerEachHour:[],
   CookiesEachHour:[],
   total:0,
    
//calcate a random customer each hour 
    calcCustomerEachHour : function  (){
    for(let i=0; i<Hour.length;i++){
    this.CustomerEachHour.push(random(this.minHourlyCustomers, this.maxHourlyCustomers))
    }
    };
     
    //calcute a random num of cookies
 calcCookiesEachHour : function (){
 for(let i=0; i< Hour.length;i++){
 this.CookiesEachHour.push(math.floor(this.CustomerEachHour[i]*this.avgCookiesEachCustomer));
 this.total += this.CookiesEchHour [i];
 }
    }; 
    
    rander: function()  {
let list1 = document.getElementById('seattle');
let pharaghrap = document .createElement('p');
pharaghrap.textContent = this .name ;
list1.appendChild(pharaghrap);
let ulElement = document.createElement('ul');
list1.appendChild(ulElement);
for(let i=0; 1<hours.length; i++){
 let liElement = document .createElement ('li');
 ulElement .appendChild(liElement);
liElement.textContent = `${hours[i]}:${this.CookiesEachHour[i]} cookes`
    
}
  let totalItem=document.createElement('li');
  ulElement.appendChild('totalItem');
 totalItem.textContent=`Total: ${this.total} cookies`
    }
    }
  console.log(tokyo);
  tokyo.getCustomerEchHour();
  tokyo.getCookiesEChHour();
  tokyo.rander();

const dubai={
  name:'dubai',
 maxHourlyCustomers:38,
 minHourlyCustomers:11,
 avgCookiesEchCustomer:3.7,
 CustomerEachHour:[],
 CookiesEachHour:[],
   total:0,
        
//calcate a random customer each hour 
  calcCustomerEachHour : function  (){
  for(let i=0; i<Hour.length;i++){
   this.CustomerEachHour.push(random(this.minHourlyCustomers, this.maxHourlyCustomers))
 }
 };
         
 //calcute a random num of cookies
  calcCookiesEachHour : function (){
  for(let i=0; i< Hour.length;i++){
 this.CookiesEachHour.push(math.floor(this.CustomerEachHour[i]*this.avgCookiesEachCustomer));
 this.total += this.CookiesEchHour [i];
 }
  }; 
        
rander: function()  {
let list1 = document.getElementById('seattle');
 let pharaghrap = document .createElement('p');
pharaghrap.textContent = this .name ;
list1.appendChild(pharaghrap);
let ulElement = document.createElement('ul');
list1.appendChild(ulElement);
for(let i=0; 1<hours.length; i++){
let liElement = document .createElement ('li');
 ulElement .appendChild(liElement);
liElement.textContent = `${hours[i]}:${this.CookiesEachHour[i]} cookes`
        
}
 let totalItem=document.createElement('li');
  ulElement.appendChild('totalItem');
  totalItem.textContent=`Total: ${this.total} cookies`
  }
   }
  console.log(dubai);
  dubai.getCustomerEchHour();
  dubai.getCookiesEChHour();
  dubai.rander();

  const paris={
 name:'paris',
 maxHourlyCustomers:38,
 minHourlyCustomers:20,
 avgCookiesEchCustomer:2.3,
 CustomerEachHour:[],
 CookiesEachHour:[],
 total:0,
            
//calcate a random customer each hour 
 calcCustomerEachHour : function  (){
 for(let i=0; i<Hour.length;i++){
  this.CustomerEachHour.push(random(this.minHourlyCustomers, this.maxHourlyCustomers))
  }
  };
             
  //calcute a random num of cookies
 calcCookiesEachHour : function (){
 for(let i=0; i< Hour.length;i++){
 this.CookiesEachHour.push(math.floor(this.CustomerEachHour[i]*this.avgCookiesEachCustomer));
 this.total += this.CookiesEchHour [i];
 }
  }; 
            
  rander: function()  {
 let list1 = document.getElementById('seattle');
let pharaghrap = document .createElement('p');
pharaghrap.textContent = this .name ;
list1.appendChild(pharaghrap);
let ulElement = document.createElement('ul');
list1.appendChild(ulElement);
for(let i=0; 1<hours.length; i++){
 let liElement = document .createElement ('li');
ulElement .appendChild(liElement);
 liElement.textContent = `${hours[i]}:${this.CookiesEachHour[i]} cookes`
            
 }
  let totalItem=document.createElement('li');
  ulElement.appendChild('totalItem');
   totalItem.textContent=`Total: ${this.total} cookies`
  }
  }
  console.log(paris);
 paris.getCustomerEchHour();
 paris.getCookiesEChHour();
 paris.rander();

  const lima={
 name:'lima',
maxHourlyCustomers:16,
 minHourlyCustomers:2,
  avgCookiesEchCustomer:4.6,
 CustomerEachHour:[],
 CookiesEachHour:[],
 total:0,
                
//calcate a random customer each hour 
 calcCustomerEachHour : function  (){
 for(let i=0; i<Hour.length;i++){
 this.CustomerEachHour.push(random(this.minHourlyCustomers, this.maxHourlyCustomers))
  }
  };
                 
  //calcute a random num of cookies
 calcCookiesEachHour : function (){
  for(let i=0; i< Hour.length;i++){
 this.CookiesEachHour.push(math.floor(this.CustomerEachHour[i]*this.avgCookiesEachCustomer));
 this.total += this.CookiesEchHour [i];
 }
 }; 
                
  rander: function()  {
let list1 = document.getElementById('seattle');
 let pharaghrap = document .createElement('p');
 pharaghrap.textContent = this .name ;
list1.appendChild(pharaghrap);
let ulElement = document.createElement('ul');
list1.appendChild(ulElement);
for(let i=0; 1<hours.length; i++){
 let liElement = document .createElement ('li');
ulElement .appendChild(liElement);
liElement.textContent = `${hours[i]}:${this.CookiesEachHour[i]} cookes`
                
}
  let totalItem=document.createElement('li');
 ulElement.appendChild('totalItem');
totalItem.textContent=`Total: ${this.total} cookies`
 }
 }
   console.log(lima);
  lima.getCustomerEchHour();
 lima.getCookiesEChHour();
 lima.rander();
             
    

        


























 

    

  



