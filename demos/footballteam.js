"use strict";

let teams = [
  { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
  { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
  { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
  { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
];

let footballDropdown = document.getElementById("footballDropdown");

for (const team of teams) {
  let option = document.createElement("option");
  option.value = team.code;
  option.innerText = team.name;
  footballDropdown.appendChild(option);
}

function showDetails() {
  let code = footballDropdown.value;
  console.log(code);


  let selectedTeam  = document.getElementById("selectedTeam")
  const detailsDiv = document.getElementById("detailsDiv")


  for (const team of teams) {
    if (team.code === code) {
      selectedTeam = team;
    }
  }
 console.log(selectedTeam)
 detailsDiv.innerText =  `Name: ${selectedTeam.name}, Plays in: ${selectedTeam.plays}`
}

