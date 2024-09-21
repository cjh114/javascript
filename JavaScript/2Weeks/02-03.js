let random_1 = parseInt(prompt('첫번째 숫자'));
let random_2 = parseInt(prompt('두번째 숫자'));

if (random_1 <= random_2) {

let random_n = Math.floor(Math.random()*(random_2 - random_1 + 1)) + random_1;
console.log(random_n);
}