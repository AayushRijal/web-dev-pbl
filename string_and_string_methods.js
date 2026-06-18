// const name = "Aayush Rijal";

// name.length;
// name[0];
// name.toUpperCase();
// name.toLowerCase();
// name.includes("Rijal"); //true
// name.startsWith("Aay"); //true
// name.trim();
// name.replace("Rijal", "Dev");
// name.split(); //splits the strings into individual arrays
// name.slice(0,4); //slice(start, end), end not included

//template literals used instead of concatenations - seen everywhere
// const name = "Aayush";
// const role = "Developer";
// console.log(`Hello, ${name}. You will become a ${role}`);


//TASK 1
//const username = "!   aayush_rijal   !"; //used ! for seeing that it actually strips whitespaces
// const trimmed = username.trim();   
// console.log(trimmed.length);
// console.log(trimmed.toUpperCase());

//TASK 2
const email = "aayush@gmail.com";
console.log(email.includes("@"));

const parts = email.split("@"); //split on @ to separate domain and username
const uname = parts[0];
console.log(uname[0].toUpperCase() + uname.slice(1)); 


//TASK 3
const products = ["  laptop  ", "PHONE", "Tablet", "  monitor  ", "KEYBOARD"];

const cleaned = products.map(product => `product: ${product.trim().toLowerCase()}`);
console.log(cleaned);
