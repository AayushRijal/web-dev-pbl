// const product = {
//     name: "Laptop",
//     stock: 5
// };

// const getStockStatus = (product)=>{
//     if(product.stock==0){
//         return "Out of Stock!";
//     }
//     else if(product.stock<10){
//         return "Low Stock";
//     }
//     else{
//         return "In Stock";
//     }
// };

// console.log(getStockStatus(product));


// const getlargerNumber = (a,b) =>{
//     if(a>b){
//         return a+" is larger.";
//     }
//     else{
//         return b+" is larger.";
//     }
// };

// console.log(getlargerNumber(4,55));

// const user = {
//     name: "Aayush",
//     isLoggedIn : true,
//     age: 19
// };

// const canAccessSite = (user) =>{
//     if(user.isLoggedIn==false){
//         return "Please Log in first";
//     }
//     if(user.age<18){
//         return "Access Denied!";
//     }
//     else{
//         return "Access Granted!";
//     }
// };

// console.log(canAccessSite(user));

const calculate = (num1, num2, operation) => {
    if(operation == "add"){
        return num1+num2;
    }
    else if(operation == "subtract"){
        return num1-num2;
    }
    else if(operation == "multiply"){
        return num1*num2;
    }
};

console.log(calculate(1,2,"add"));
console.log(calculate(4,5,"multiply"));