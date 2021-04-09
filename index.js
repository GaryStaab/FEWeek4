"use strict";
// Using template literals instead of concatenation
// write a function that takes firstName and lastName and returns ‘fistName lastName’
let firstName = 'Fred';
let lastName = 'Flintstone';
function fullName(first,last){
    console.log(`Full name is ${first} ${last}`);
}
fullName(firstName,lastName);

// Write the same function as above as an arrow function with a different name.
// have to define these up front
const fullNameArrow = (first,last) => console.log(`Arrow Full name is ${first} ${last}`);
fullNameArrow(firstName,lastName);

// example of a callback
// Look up the JavaScript functions setTimeout() and setInterval(). Notice how they each take a callback.
// using setTimeout, write an anonymous (has no name assigned to it) arrow function in the callback parameter position. 
//The function should alert ‘Time is up!’. Choose whatever length of time you want for the timeout.
let timeoutID = setTimeout(() => alert('Time is up'), 10 * 1000); // Set time is up to fire after 10 seconds

// Write an arrow function named askAreWeThereYet that alerts ‘Are we there yet?’. Using setInterval, 
// pass askAreWeThereYet into the callback parameter position. Choose whatever length of time you want for the interval
const askAreWeThereYet = () => alert('Are we there yet');
let areWeThereID = setInterval(askAreWeThereYet, 5 * 1000); // Set are we there to fire every 5 seconds

// got inspired by others on our group call with the cohort - added logic to disable Are we there yet after 1 minute
const clearTimeout = () => {
    clearInterval(areWeThereID);
    alert("We're there!!!");
};
let timeoutID2 = setTimeout(clearTimeout, 60 * 1000);

// In this step you are going to write a function that takes a callback to better understand how callbacks work.
//	Write a new function named processSplicedValue that takes 3 parameters – an array, the index of the element to be spliced from the array
// and a callback function that will process the sliced element. 
// create function processSplicedValue(array,index,callback)
// Inside the function, use the first two parameters to splice an element from the array.
// Inside the function, call the callback function and pass the spliced value into it.
function processSplicedValue(array, index, callBackFunction){
    var removed = array.splice(index,1);
    callBackFunction(removed);
}
// Outside of the function, create an array of strings, call processSplicedValue, and pass in the array you just created, an index number, and console.log into it. 
var spliceTest = ["Fred","Wilma","Pebbles","Dino","Barney","Betty","Bamm-Bamm"];
processSplicedValue(spliceTest,5,console.log);
//	Call the processSplicedValue function again but this time pass in the alert method instead of console.log.
processSplicedValue(spliceTest,0,alert);
//	Call the processSplicedValue function again, but this time pass in an anonymous arrow function that alerts the spliced value.
processSplicedValue(spliceTest,0,removed => alert(removed));
//	Call the processSplicedValue function one more time, but this time, pass in a custom function of your choice that you should create and name.
processSplicedValue(spliceTest,0,checkForDino);
processSplicedValue(spliceTest,0,checkForDino);
function checkForDino(array){
    //console.log(array[0]);
    if (array[0] === 'Dino'){
        alert("You deleted Dino ?!?!?!?");
    }else{
        console.log(`It is ok to delete ${array[0]}`);
    }
}
// I know it is not in the assignment but I'd like to try and create a promise
const myPromise = new Promise((resolve, reject) => {
    let condition = true;
    if (condition) {
        resolve('Promise is resolved.');
    } else {
        reject('Promise rejected');
    }
});
myPromise.then((message) => {
        console.log(`Success: ${message}`);
    })
    // .then((message) => {
    //     console.log(`Success: ${message}`);
    // })
    .catch((message) => {
        console.log(`Failure: ${message}`);
    });