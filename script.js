// Write your JavaScript code here!



window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       let selectedPlanet = pickPlanet(listedPlanets); //pickPlanet is a helper function to pick a planet from the list of planets that add info to destination
        addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image);  
    //addDestinationInfo() function from scriptHelper.js file
    })

    let list = document.getElementById("faultyItems"); //let list = faultyItems element from index.html which contains pilot, copilot, fuel, and cargo status'
    list.style.visibility = "hidden"; //list.style.visibility is using CSS id selector #faultyItems from styles.css 
    let form = document.querySelector("form"); //textbook 25.9.2 example 
 
    form.addEventListener("submit", function(event) { //form submit event listener handles form submission
        event.preventDefault(); //prevent request being sent out & page reloading

        let pilotInput = document.querySelector("input[name=pilotName]"); //querySelector attribute to select the <input> that has name="pilotName".
        let pilot = pilotInput.value; //pilot string input value
 
        let copilotInput = document.querySelector("input[name=copilotName]"); //querySelector attribute to select the <input> that has name="copilotName"
        let copilot = copilotInput.value; //copilot string input value
 
        let fuelInput = document.querySelector("input[name=fuelLevel]"); //querySelector attribute to select the <input> that has name="fuelLevel"
        let fuelLevel = Number(fuelInput.value); //convert fuel input value to number
 
        let cargoInput = document.querySelector("input[name=cargoMass]"); //querySelector attribute to select the <input> that has name="cargoMass"
        let cargoLevel = Number(cargoInput.value); //convert cargo input value to number
 
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel); //make sure to call your formSubmission() function at the appropriate time in your script.js file

    });
 });


