<<<<<<< HEAD
var request = new XMLHttpRequest()

let result = [];
let stateName = document.getElementById("stateName").value;
let submit = document.getElementById("submit")

request.open('GET', 'https://api.openbrewerydb.org/breweries?by_state='+stateName, true)


request.onload = function () {
    var data = JSON.parse(this.response)
    data.forEach(obj => {
    console.log(obj.city);
    })
}

function changeState(){
    let stateChoice = document.getElementById("stateName").value;
    request.open('GET', 'https://api.openbrewerydb.org/breweries?by_state='+stateChoice, true)
    request.onload = function () {
    var data = JSON.parse(this.response)
    data.forEach(obj => {
        result.push(obj.name);
        result.push(obj.brewery_type);
        result.push(obj.city);
        result.push(obj.state);
        result.push(obj.phone);
        if(obj.website=''){
            result.push("No website.");
        }result.push(obj.website);
    })
    }
    request.send()
    console.log(result);
    return result;
}

submit.addEventListener('click', changeState);

=======
// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.openbrewerydb.org/breweries?by_state=california', true)

request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)

    data.forEach(obj => {
    // Log each movie's title
    console.log(obj.city)
    })
}

// Send request
>>>>>>> commit
request.send()