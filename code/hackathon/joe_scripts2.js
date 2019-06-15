// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();
// let stateName = 'arizona'
let stateName = document.getElementById("stateName").value;
let submit = document.getElementById("submit");

// Open a new connection, using the GET request on the URL endpoint
request.open(
  "GET",
  "https://api.openbrewerydb.org/breweries?by_state=" + stateName,
  true
);

request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  data.forEach(obj => {
    // Log each movie's title
    console.log(obj.city);
  });
};

function changeState() {
  let stateChoice = stateName;
  console.log(stateChoice);
}

// submit.addEventListener('click', changeState);

// Send request
request.send();
