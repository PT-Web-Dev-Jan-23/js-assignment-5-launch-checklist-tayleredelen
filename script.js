// Write your JavaScript code here!

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});



// 1. You added JavaScript in ``script.js`` that is enclosed within a load event listener.
// 1. A submit event listener handles the form submission.
// 1. `event.preventDefault()` stops the default form submission behavior.
// 1. Form validation includes logic for incomplete and inappropriate field data types.
// 1. The list items in the third box use template literals to display submitted values.
// 1. Status message content and styling changes if the shuttle is ready for launch or not.
// 1. CSS updates are made via DOM methods. `styles.css` remains unchanged.
// 1. A fetch request hits the [planets API](https://handlers.education.launchcode.org/static/planets.json),
//    an item from the response is selected and its values are displayed in the DOM using more template literals.
//    In the assignment, you can select whichever planet they want. If you have attempted the bonus mission, then your code is randomly selecting an item from the planets API.