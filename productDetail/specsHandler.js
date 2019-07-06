// CONTENTS FROM DATABASE

const specsList = [
  "specs 1 Here",
  "specs 2 Here",
  "specs 3 Here",
  "specs 4 Here"
];

var container = document.getElementById("specs");
var content = "";

for (i = 0; i < specsList.length; i++) {
  content += `
        <li>${specsList[i]}</li>`;
}
container.innerHTML += content;
