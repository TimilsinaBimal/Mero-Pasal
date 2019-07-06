// CONTENTS FROM DATABASE

const locationList = [
  "Select Location...",
  "Kathmandu",
  "Butwal",
  "Dhulikhel",
  "Banepa",
  "Bhaktpur",
  "Lalitpur",
  "Kalanki"
];

var container = document.getElementById("inputState");
var content = "";

for (i = 0; i < locationList.length; i++) {
  if (i == 0) {
    content += `<option selectes>${locationList[i]}</option>`;
  } else {
    content += `
    <option>${locationList[i]}</option>`;
  }
}
container.innerHTML += content;
