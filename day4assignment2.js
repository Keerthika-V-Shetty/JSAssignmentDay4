//Explain with examples the remaining methods of String and Array.

//toString(): converts an array to a string of (comma separated) array values.

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();

//join(): joins all array elements into a string.

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * ");

//pop(): removes the last element from an array.

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();

//push():  adds a new element to an array (at the end).

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.push("Kiwi");

//shift(): removes the first array element and "shifts" all other elements to a lower index.

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();

//unshift(): adds a new element to an array (at the beginning), and "unshifts" older elements.The unshift() method returns the new array length.

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");

//index: Array elements are accessed using their index number.

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Kiwi";

//length: provides an easy way to append a new element to an array.

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Kiwi";

//delete: elements can be deleted by using the JavaScript operator delete.

var fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];

//splice: can be used to add new items to an array.

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");

//concat: creates a new array by merging (concatenating) existing arrays.

var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys);

//Automatic toString(): JavaScript automatically converts an array to a comma separated string when a primitive value is expected.

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();

//sort(): sorts an array alphabetically.

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();

//reverse(): reverses the elements in an array.

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();

//Math.max(): to find the highest number in an array.

function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}

//Math.min(): to find the lowest number in an array.

function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}

//forEach(): calls a function (a callback function) once for each array element.

var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt = txt + value + "<br>";
}

//map(): creates a new array by performing a function on each array element.It does not execute the function for array elements without values.It does not change the original array.

var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}

//filter(): creates a new array with array elements that passes a test.

var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

//reduce():  runs a function on each array element to produce(reduce it to) a single value.It works from left - to - right in the array.It does not reduce the original array.

var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}

//reduceRight(): runs a function on each array element to produce(reduce it to) a single value.It works from right - to - left in the array.It method does not reduce the original array.

var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduceRight(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}

//every(): check if all array values pass a test.

var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

//some(): check if some array values pass a test.

var numbers = [45, 4, 9, 16, 25];
var someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

//indexOf(): searches an array for an element value and returns its position.

var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");

//Array.lastIndexOf(): is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.

var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.lastIndexOf("Apple");

//find(): returns the value of the first array element that passes a test function.

var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

//findIndex(): returns the index of the first array element that passes a test function.

var numbers = [4, 9, 16, 25, 29];
var first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
