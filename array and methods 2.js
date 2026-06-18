const numbers = [1,2,3,4,5,6,7,8,9,10];

numbers.push(0);
console.log(numbers);

numbers.pop();
console.log(numbers);

const triple = numbers.map(n => n*3);
console.log(triple);

const f = numbers.filter(n => n%2);
console.log(f);

const Add = numbers.unshift(0);
console.log(Add);

const rem = numbers.shift();
console.log(rem);

const first_finder = numbers.find(n => n%6==0);
console.log(first_finder);