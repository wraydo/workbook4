"use strict"

let lunch = [
 {item:"Steak Quesadilla", price: 9.95},
 {item: "Fried Chicken Pack", price: 10.75}
 {item: "Buffalo Wings Meal", price: 7.75} 
]

let subtotal = 0 
 for (let index = 0; index <= lunch.length; index++){
    subtotal += lunch[index].price; 
 
    
 }
  let tax = subtotal * 0.08;
  let tip = subtotal * 0.18;
  let total = subtotal + tax + tip;

  console.log("$ subtotal");
  console.log("total");
  console.log("tax");
  console.log("tip");





