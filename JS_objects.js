// const user = {
//     name: "Aayush",
//     age: 20,
//     isActive: true,
// };

// console.log(user.name);

//ADD TO/UPDATE existing object:
// user.email = "aayush123@gmail.com"; //gets added to object
// user.age = 21; //existing key gets updated

//DELETE from an object:
// delete user.isActive;

//check if a key exists in an object, returns bool value
//"email" in user; //returns true

// const key = "name";
//user.key // ❌ looks for a literal property called "key" — wrong
//user[key]; // ✅ uses the variable's value → "name" → gets user.name


//OBJECTS AND ARRAYS TOGETHER
// const users = [
//     {name: "Alice", age:25},
//     {name: "Bob", age:21},
// ];
//Exactly what an API response from a database looks like

// Object.keys / Object.values — useful for looping
//const user = {name: "Aayush", age:20};

//console.log(Object.keys(user)); //returns only the keys from the objets. object != Object
//console.log(Object.values(user)); //returns only the values from the object







//TASK 1
// const car = {
//   brand: "Toyota",
//   model: "Corolla",
//   year: 2022,
// };

// console.log(car.brand);

// car.color = "red";
// car.year = 2024;

// console.log(car);


//TASK 2
// const product = {
//   name: "Laptop",
//   price: 1200,
//   inStock: true,
// };

// const getValue = (obj, key) =>{
//     return obj[key];
// }

// console.log(getValue(product, "price"));
// console.log(Object.keys(product));
//need hint with this

//TASK 3
// const users = [
//   { name: "Alice", age: 25, city: "NYC" },
//   { name: "Bob", age: 17, city: "LA" },
//   { name: "Charlie", age: 30, city: "NYC" },
// ];

// const filtered = users.filter(user => user.city.includes("NYC"));
// const update = users.map(user =>({
//     name: user.name,
//     age: user.age
// }));
// const finder = users.find(user => user.age===30);
// console.log(`${finder.name} is ${finder.age} year old and lives in ${finder.city}`);