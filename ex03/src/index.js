// Create a myPetsArray here
var myPetsArray = ["Dog", "Cat"]
// End of myPetsArray

function myArrayFunction(myPets) {
    var myNewPets = [...myPets];

// Only change code below this line
myNewPets = ["Bird", "Fish"];
var firstPet = myNewPets.shift();
var lastPet = myPetsArray.pop();
myNewPets.shift();
myNewPets = [lastPet, firstPet];
myNewPets.unshift('Lion');
return myNewPets;
// Only change code above this line
}

console.log(myArrayFunction(myPetsArray)); // Change this line
module.exports = myArrayFunction;