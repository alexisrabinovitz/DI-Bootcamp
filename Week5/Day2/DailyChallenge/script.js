// Instructions
// In this exercise we will be creating a webpage with a black background as the universe and we will fill the universe with planets and their moons.
// We will provide the HTML page.
// You only have to work with a JS file.

// Create an array which value is the planets of the solar system.
// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
// Finally append each div to the <section> in the HTML (presented below).
// Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?

let planets = [
    {name: "Mercury", moons: 0},
    {name: "Venus", moons: 0},
    {name: "Earth", moons: 1},
    {name: "Mars", moons: 2},
    {name: "Jupiter", moons: 67},
    {name: "Saturn", moons: 62},
    {name: "Uranus", moons: 27},
    {name: "Uranus", moons: 14}
];

const listPlanets = document.querySelector('.listPlanets');

planets.forEach(planet => {
    let planetDiv = document.createElement('div');
    planetDiv.classList.add('planet', planet.name.toLowerCase());
    listPlanets.appendChild(planetDiv);

    for (let i = 1; i <= planet.moons; i++) {
        let moonDiv = document.createElement('div');
        moonDiv.classList.add('moon', planet.name.toLowerCase());
        let moveMoon = (90 + (i * 30)) + 'px';
        moonDiv.style.left = moveMoon;
        planetDiv.appendChild(moonDiv);
    }
});