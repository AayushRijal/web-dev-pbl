// const fruits = ["papaya", "pear", "apple", "banana"];
// console.log(fruits.length);
// console.log(fruits[1]);

//Array methods

const nums = [2,4,6,8,10];

nums.push(12); //adds to the end of array
nums.pop(); //remove from end
nums.unshift(0); //adds to the start of array
nums.shift(); //removes from the start of array

//MAPS method: map → transform every item, return new array of same length
const double = nums.map(n => n*2);

//FILTERS method: keeps items from array that pass the test/condition
const evens = nums.filter(n => n%2==0);

//FIND method: returns the first element that passes the test/condition
const firstBig = nums.find(n=>n>=3);

//Utility
nums.includes(4); //returns true
nums.indexOf(10); //returns index of the element