// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let div = document.getElementById("missionTarget"); //missionTarget element from index.html
    //temp lit to display info, using variables from destination info
    div.innerHTML = `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">
                 `;
 }

//validateInput() should take in string as parameter and return empty, not a number, or is a number. 
function validateInput(testInput) {
    let numberInput = Number(testInput); //take input and convert to number
    if (testInput === "") //if input is empty, return empty
    {
        return "Empty";
    }
    else if (isNaN(numberInput)) //else if input is NaN, return not a number
    {
        return "Not a Number";
    }
    else if (isNaN(numberInput) === false) //else if input is a number, return is a number
    {
        return "Is a Number";
    }
}

//Use above function validateInput() to complete formSubmission() function
//formSubmission() take in a document parameter, and strings representing pilot, copilot, fuel level, & cargo mass. 
//Use the values in those strings and the document parameter (document.getElementById)
//Add an alert to notify the user that all fields are required

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus"); //element from index.html
    let copilotStatus = document.getElementById("copilotStatus"); //element from index.html
    let fuel = document.getElementById("fuelStatus"); //element from index.html
    let cargo = document.getElementById("cargoStatus"); //element from index.html

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields are required!"); //if pilot, copilot, fuelLevel, or cargoLevel input is empty alert "All fields are required!"
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number" ) {
        alert("Make sure to enter valid information for each field!"); //else if pilot/copilot is a number or fuelLevel/cargoLevel is not a number alert "Make sure to enter valid information for each field!"
    } else { //else all fields filled with valid info...
        list.style.visibility = "visible"; //visible (list.style.visibility is using CSS id selector #faultyItems from styles.css) 
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`; //pilotStatus.innerHTML reads and updates temp lit for pilot
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`; //copilotStatus.innerHTML reads and updates temp lit for copilot
        let launchStatus = document.getElementById("launchStatus"); //launchStatus element from index.html
        if (fuelLevel < 10000 && cargoLevel <= 10000) { //if fuelLevel less than 10k and cargoLevel less than or equal to 10k
            fuel.innerHTML = "Fuel level too low for launch"; //fuel too low message
            cargo.innerHTML = "Cargo mass low enough for launch" //cargo too low message
            launchStatus.innerHTML = "Shuttle Not Ready for Launch"; //status not ready message
            launchStatus.style.color = "#C7254E"; //red color
        } else if (fuelLevel >= 10000 && cargoLevel > 10000) { //else if fuelLevel greater than or equal to 10k and cargoLevel greater than 10k
            fuel.innerHTML = "Fuel level high enough for launch" //fuel too high message
            cargo.innerHTML = "Cargo mass too heavy for launch"; //cargo to heavy message
            launchStatus.innerHTML = "Shuttle Not Ready for Launch"; //status not ready message
            launchStatus.style.color = "#C7254E"; //red color
        } else if (fuelLevel < 10000 && cargoLevel > 10000) { //else if fuelLevel less than 10k and cargoLevel greater than 10k
            fuel.innerHTML = "Fuel level too low for launch"; //fuel too low message
            cargo.innerHTML = "Cargo mass too heavy for launch"; //cargo too heavy message
            launchStatus.innerHTML = "Shuttle Not Ready for Launch"; //status not ready message
            launchStatus.style.color = "#C7254E"; //red color
        } else { //else fuelLevel greater than 10k and cargoLevel less than 10k
            fuel.innerHTML = "Fuel level high enough for launch" //fuel high enough message
            cargo.innerHTML = "Cargo mass low enough for launch" //cargo low enough message
            launchStatus.innerHTML = "Shuttle is Ready for Launch"; //status ready message 
            launchStatus.style.color = "#419F6A"; //green color
        }
    }
 }


 async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
            if (response.status >= 400) { //if response status greater than or equal to 400 
                throw new Error ("Bad response"); //throw error "Bad response"
            }
            else {
                return response.json(); //json() method is used to gain access to the JSON data contained in the response object.
            }
        });

    return planetsReturned;
}



function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets.length); //let index = random rounded planets.length 
    return planets[index]; //return planets index value
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
