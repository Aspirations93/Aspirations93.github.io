// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.openbrewerydb.org/breweries', true)

request.onload = function () {
  // Begin accessing JSON data here
  console.log("Yes")
  }

// Send request
request.send()