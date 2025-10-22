/* Exercise 1 
1. Use a script tag to link to this file.
2. Create a function called greet
Inside the function, log "Hello world" in the console
3. Call the function
4. Edit the function to add a parameter: greeting
Inside the function, change "Hello World" to greeting to log it in the console
5. Edit the function call to include a string argument - the greeting of your choice.
*/
function greet(greeting) {
    console.log(greeting);
}

greet("Hello universe!")


/* Exercise 2
1. In main.js, use the DOM to select the p tag with id moon-fact-1 and assign it a variable
2. Create a function called factOne
Inside factOne(), set the textContent of the p tag to a string containing a moon fact from moon-facts.txt
3. In index.html, add the onclick attribute to the flag pin image tag 
Set its value to call the factOne() function
*/

const ex2PEag = document.querySelector("#moon-fact-1");
function factOne() {
    ex2PElement.textContent = "The Moon is drifting away from the Earth. It is moving approximately 3.8 cm away from our planet every year.";
}

/* Exercise 3
1. In main.js, use the DOM to select the p tag with id moon-fact-2 and assign it a variable
2. Create a function called factTwo
Inside factTwo(), set the textContent of the p tag to a string containing a moon fact from moon-facts.txt
3. Outside the function, use the DOM to select the pin image tag with id fact-2-icon
4. Use the .addEventListener() method to add a click event listener to the flag image. Have it call function factTwo on click
*/
const ex3PElement = document.querySelector("#moon-fact-2");
function factTwo() {
    ex3PElement.textContent = "Although it appears bright in the night sky, the Moon’s surface is actually dark, with a reflectance just slightly higher than that of worn asphalt.";
    this.src= "pin-blue.png";
}
const factTwoIcon = document.querySelector("#fact-2-icon");
factTwoIcon.addEventListener("click", factTwo);
/* Exercise 4
1. Inside function factTwo(), set the src property of factTwoIcon to a string containing pin-blue.png
2. EDIT the line you just created, replace factTwoIcon with the word this
*/





/* Exercise 5 - Finish the moon facts
1. Use the querySelector method to select the p tag with id moon-fact-3
2. Create a function called factThree()
Inside the function, change the textContent of the p tag to the text of another fact from moon-facts.txt
Change the flag image to pin-blue.png, use either the variable or the this keyword for the flag image object
3. Outside the function, add an event listener for the click event and have it call the factThree function
4. Repeat the same steps for moon-fact-4, moon-fact-5

Secret alien base
5. Use the querySelector method to select the p tag with id moon-fact-6
6. Create a function called secret()
Inside the function, change the textContent of the p tag to text about a secret alien moon base 
Change the flag image to the alien ship
7. Outside the function, add an event listener for the click event and have it call the secret function
*/

const factThreeText = document.querySelector("#moon-fact-3");
function factThree() {
    factThreeText.textContent = "The Moon always shows Earth the same face, it is in synchronous rotation with Earth.";
    this.src = "pin-blue.png";
}

const factThreeIcon = document.querySelector("#fact-3-icon");
factThreeIcon.addEventListener("click", factThree);

const factFourText = document.querySelector("#moon-fact-4");
function factFour() {
    factFourText.textContent = "The Moon is the second densest satellite, among those whose densities are known. The first densest is Jupiter's satellite Io.";
    this.src = "pin-blue.png";
}

const factFourIcon = document.querySelector("#fact-4-icon");
factFourIcon.addEventListener("click", factFour);

const factFiveText = document.querySelector("#moon-fact-5");
function factFive() {
    factFiveText.textContent = "There is water on the Moon! It has been detected on areas of the lunar surface that are in permanent shadow and was likely delivered to the surface by comets.";
    this.src = "pin-blue.png";
}

const factFiveIcon = document.querySelector("#fact-5-icon");
factFiveIcon.addEventListener("click", factFive);

const factSixText = document.querySelector("#moon-fact-6");
function Secret() {
    factFiveText.textContent = "There is a secret alien base on the dark side of the moon!";
    this.src = "alien-ship.png";
}

const secretIcon = document.querySelector("#secret");
secretIcon.addEventListener("click", Secret);
/*****  Bonus Exercise - Fixing the first flag image ******
1. In index.html, add an argument, this, to the factOne() function call in the flag image tag.
2. In main.js, add a parameter called icon to the factOne() function
3. Inside the function, run the src property on the parameter icon and set its value to "pin-blue.png" 
*/