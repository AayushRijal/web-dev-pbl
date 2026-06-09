//Concept learnt - June 8, 2026
// function add(a, b) {
//   return a + b;
// }

// let result = add(2, 3);
// console.log(result);

// function greet_user(name = "Hari Bahadur"){
//     console.log("Hello " + name);
// }

// greet_user("Sitaram");

//JS arrow functions

//regular function
// function greet_user(name = "Hari Bahadur"){
//     console.log("Hello " + name);
// }

//arrow function

//useful for working with large or multi line functions

// const greet_user = (name = "Hari Bahadur") => {
//     console.log("Hello " + name);
// };

//TASK 1
//Write a function that takes a username as a parameter with a default value of "Guest" and returns "Hello, username". Call it twice - once with a name, once without.
// function greet_guest(username = "Guest"){
//     console.log("Hello, " + username);
// }

// greet_guest("Johnny Dave");
// greet_guest();


//TASK 2
// Write an arrow function called calculateTotal that takes price and quantity and returns the total. Then write another arrow function called applyDiscount that takes a total and a discountPercent and returns the discounted price.
// const calculateTotal = (price, quantity) => {
//     return price * quantity;

// };

// const applyDiscount = (total, discountPercent) => {
//     return (total - (total * (discountPercent / 100)));
// };

// const total = calculateTotal(10, 5); 
// const discounted = applyDiscount(total, 10);
// console.log("Total is: " + total);
// console.log("Discounted price is: " + discounted);

//Task 3
//Build a basic user greeting system. Create a userProfile object with name, isLoggedIn, and role. Write a function called getDashboardMessage that takes the object as a parameter and returns different messages based on the values — for example, if not logged in return "Please log in", if role is "admin" return "Welcome admin, name", otherwise return "Welcome, name".

// const userprofile = {
//     name : "Aayush",
//     isLoggedIn : true,
//     role : "user"
// };

// const getDashboardMessage = (userProfile) => {
//     if(userProfile.isLoggedIn==false){
//         console.log("Please log in.");
//     }
//     else if(userProfile.role=="admin"){
//         console.log("Welcome admin, " + userProfile.name);
//     }
//     else{
//         console.log("Welcome, " + userProfile.name);
//     }
// }

// getDashboardMessage(); //passing nothing, no output
//getDashboardMessage(userprofile); //passing the objects

//console.log() just shows the output in the console while return is used when you need to pass a value anywhere in the program


//Additional practice - Hune 9, 2026
//Write a function called greetUser that takes a username as a parameter with a default value of "Guest" and returns a welcome message. Call the function once with a name and once without passing any argument.
// function getUser(username = "Guest"){
//     console.log("Hello "+username);
// }

// getUser();
// getUser("Shyam");

//Write an arrow function called calculateArea that takes length and width as parameters and returns the area of a rectangle. Then write another arrow function called calculatePerimeter that returns the rectangle's perimeter.

// const calculateArea = (length, width) =>{
//     area = length * width;
//     return area;
// }

// const calculatePerimeter = (length, width) =>{
//     perimeter = 2*(length+width);
//     return perimeter;
// }

// console.log("Area of rectangle:", calculateArea(10,5));
// console.log("Perimeter of rectangle:", calculatePerimeter(10,5));

// Create a userProfile object containing name, isLoggedIn, and subscriptionType. Write a function called getUserMessage that: Returns "Please log in" if the user is not logged in. Returns "Welcome Premium User, name" if the subscription type is "premium". Otherwise returns "Welcome, name".

const userProfile = {
    name: "Aayush",
    isloggedIn:true,
    subscriptionType:"Premium",
};

const getUserMessage = (userProfile)=>{
    if(userProfile.isloggedIn==false){
        return "Please Log in";
    }
    if(userProfile.subscriptionType=="Premium"){
        return "Welcome Premium User, "+userProfile.name;
    }
    else{
        return "Welcome "+userProfile.name;
    }

}

console.log(getUserMessage(userProfile));