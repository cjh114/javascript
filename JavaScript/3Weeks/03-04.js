let gugudan_print = '';

let dan = parseInt(prompt('출력할 구구단의 단을 입력하세요.', 2));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.map(((value) => {gugudan_print += `${dan} X ${value} = ${dan*value}\n`}))

alert(gugudan_print)