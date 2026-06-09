//Task 1
// const name = "Aayush Rijal"; //value remains same throughout the program. const because name is not going to change in future
// let age = 19; //value might change in future. let because age is going to change in future and might be updated in future
// let email = "abcd@gmail.com"; //value might change in future, user may want to update their emails
// let isloggedIn = true; //value might change in future. This is denoting a state and it can change.

// console.log(name);
// console.log(age);
// console.log(email);
// console.log(isloggedIn);

//Task 2
// const userProfile = {
//     name: "Aayush Rijal",
//     age: 19,
//     email: "abcd@gmail.com",
//     gender: "Male",
//     isloggedIn: true,
// };

// console.log("Whole user profile printed at once:"); 
// console.log(userProfile); //prints the whole object at once, along with brackets {}

// console.log("Individual members of objects printed separately:");

// console.log(userProfile.name);
// console.log(userProfile.age);
// console.log(userProfile.email);
// console.log(userProfile.gender);
// console.log(userProfile.isloggedIn);

//Task 3

const user1 = {
    name: "John Doe",
    age: 30,
    role: "Hiring Manager",
};

const user2 = {
    name: "Jane Smith",
    age: 25,
    role: "Software Engineer",
};

const user3 = {
    name: "Bob Johnson",
    age: 35,
    role: "Product Manager",
};

let users = [user1, user2, user3]; //array of objects

console.log(users);
console.log(users[1].name);
