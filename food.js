function showAll(params) {
    document.querySelector('.breakfast').style.display='block'
    document.querySelector('.main-dish').style.display='block'
    document.querySelector('.drink').style.display='block'
    document.querySelector('desserts').style.display='block'
 }
 function breakfast(params) {
     document.querySelector('.breakfast').style.display='block'
     document.querySelector('.main-dish').style.display='none'
    document.querySelector('.drink').style.display='none'
    document.querySelector('desserts').style.display='none'
 
 }
 function mainDishes(params) {
     document.querySelector('.breakfast').style.display='none'
     document.querySelector('.main-dish').style.display='block'
    document.querySelector('.drink').style.display='none'
    document.querySelector('desserts').style.display='none'
 
 }
 function drinks(params) {
     document.querySelector('.breakfast').style.display='none'
     document.querySelector('.main-dish').style.display='none'
    document.querySelector('.drink').style.display='block'
    document.querySelector('desserts').style.display='none'
  
 }
 function desserts(params) {
     document.querySelector('.breakfast').style.display='none'
     document.querySelector('.main-dish').style.display='none'
    document.querySelector('.drink').style.display='none'
    document.querySelector('desserts').style.display='block'
 
 }
 document.querySelector('.first-btn').addEventListener('click', showAll);
 document.querySelector('.second-btn').addEventListener('click', breakfast);
 document.querySelector('.third-btn').addEventListener('click', mainDishes);
 document.querySelector('.fourth-btn').addEventListener('click', drinks);
 document.querySelector('.five-btn').addEventListener('click', desserts);