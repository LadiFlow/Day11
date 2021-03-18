// Create an array here
var myArr = [2, 4, 0, 8, 10];
// End of creating a array

function myArrayFunction(arr) {
   myArr[2] = 6;
   var myItems = [...arr];
   var myItems = myArr;
    // Only change code below this line

    return myItems;
    // Only change code above this line
}

console.log(myArrayFunction("myItems"));    // Change this line
module.exports = myArrayFunction;