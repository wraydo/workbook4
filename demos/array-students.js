"use strict"

let students = ["Ray","Washington","Rogan","Jerry","Christopher"]

console.log(students[4])

[ { first: "Ray", hairColor: "black" },
  { first: "Washington", hairColor: "black" },
  { first: "Rogan", hairColor: "black" },
  { first: "Jerry", hairColor: "black" },
  { first: "Christoper", hairColor: "black" },

] 


for (let i = 0; i < students.length; i++) {
  const student = students[i];
  console.log(student.first, student.hairColor);
}







