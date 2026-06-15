//TASK 1

// You have this array of scores:
// const scores = [45, 82, 91, 37, 68, 55, 78];

// 1. Log the first and last score
// 2. Add a new score 95 to the end
// 3. Log the total number of scores (using .length)

// const scores = [45, 82, 91, 37, 68, 55, 78];
// console.log(scores[0]);
// console.log(scores[scores.length - 1]);
// scores.push(95);

// console.log(scores.length;

//TASK 2
// Task 2 — Medium
// You have a list of products:
// const products = ["Laptop", "Phone", "Tablet", "Monitor", "Keyboard"];

// Use .map() to create a new array where every product name is uppercased (hint: .toUpperCase() works on strings)
// Use .filter() to get only products whose name is longer than 6 characters
// Log both results

// const products = ["Laptop", "Phone", "Tablet", "Monitor", "Keyboard"];

// const upper = products.map(product => products.toUpperCase()); //need to pass function to map

// const long = products.filter(product => products.length>6);

// console.log(upper);
// console.log(long);

// Task 3 — Hard
// You have this array of user objects:
const users = [
  { name: "Alice", age: 25, active: true },
  { name: "Bob", age: 17, active: false },
  { name: "Charlie", age: 30, active: true },
  { name: "Diana", age: 15, active: true },
];
// Use .filter() to get only users who are 18 or older
// From that filtered result, use .map() to create a new array of just their names
// Use .find() on the original users array to get the first inactive user, then log their name


//important in react
const names = users
  .filter(user => user.age >= 18)
  .map(user => user.name);
const inactive = users.find(users => users.active===false); //ALWAYS use stricty equality operator
console.log(adult);
console.log(inactive.name);

// MOST IMPORTANT FILTERS CONSTANTLY USED IN REACT
// map
// filter
// find
