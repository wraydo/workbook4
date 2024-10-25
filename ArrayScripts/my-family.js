"use strict";
// arrays
// functions, calling function, passing parameters, catch return value in variable
// for loop
// operators to the summing
//

let myScores = [92, 98, 84, 76, 89, 99, 100];

let yourScores = [82, 98, 94, 88, 92, 100, 100];

let williesScores = [93, 98, 94, 95, 99, 100, 100];

// let yourScores [82, 98, 94, 88, 92, 100, 100];

// for (let index = 0; index < list.length; index++){
//     const item = list[position];
//     console.log(item);
// do job
// }

function getAverage(scores) {
  let sumOfAllScores = 0;
  for (const score of myScores) {
    sumOfAllScores = sumOfAllScores = score; //sumOfAllScores +=score;
  }
  let averageScore = sumOfAllScores / scores.length;
  return averageScore;
}

let myAverageScore = getAverage(myScores);
console.log(myAverageScore.toFixed(2));
return myAverageScore;

let yourAverageScore = getAverage(yourAverageScores);
console.log(yourAverageScore.toFixed(2));


let williesAverageScores = getAverage(williesScores);
console.log(williesAverageScores);



// let list = [92, 98, 84, 76, 89, 99, 100];
// for (let position = 0; position < list.length; position++) {
//   const item = list[position];
//   //   console.log(item);
//   //do job
// }

// for (const item of list) {
//   console.log(item);
// }

// let cats = ["Garfield", "Tom", "Toma", "Mochi", "Felix", "Flex", "Sylvester", "P Kitty"];

// for (let cat of cats) {
//   console.log(cat);
// }

// for (let index = 0; index < cats.length; index++) {
//   const cat = cats[index];
//   console.log(cat);

// }