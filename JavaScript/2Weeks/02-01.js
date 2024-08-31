let fruits = ['apple', 'banana', 'cherry'];

console.log(fruits);
console.log(`배열 fruits의 길이는 ${fruits.length}입니다.`);
console.log(`0번째 : ${fruits[0]}, 마지막 번째 : ${fruits[2]}`);

fruits.pop();
fruits.shift();

console.log(fruits);

fruits = ['apple', 'banana', 'cherry'];

fruits.push("grape");
fruits.unshift("mango");

console.log(fruits);

console.log(fruits.indexOf("banana"));

fruits.splice(2, 1);
console.log(fruits);

let random_n = Math.floor(Math.random()*(34-25+1)) + 25;

console.log(random_n);