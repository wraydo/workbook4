"use strict"
//object
let person = {
first: "Jim",
middle: "Joe",
last: "Jones",
age: 48,
stageName: "Jim J",
//dot notation
netWorth: 400000,
};


//dot notation
console.log(person.netWorth);

//pass an object as a function parameter
function printPerson(person){
console.log(person);

}
printPerson (person);

//return an object from a function
function createPerson(){
let person = {
    first: "Chrissy",
    last: "Lampkins",
}
return person;

}; 

//catch the return valule in a variable
let spouse = createPerson();
console.log(spouse);



