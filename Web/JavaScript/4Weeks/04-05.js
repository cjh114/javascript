const start = document.querySelector(".start")
const result = document.querySelector(".result")
const reset = document.querySelector(".reset")

start.addEventListener('click', () => {
    let text1 = parseInt(document.getElementById('text1').value);
    let text2 = parseInt(document.getElementById('text2').value);
    D(text1, text2)
})

reset.addEventListener('click', () => {
    let text1 = document.getElementById('text1')
    let text2 = document.getElementById('text2')
    text1.value = ''
    text2.value = ''
    result.innerText = ''
})

function D (num1, num2) {
    result.innerHTML = `${num1} + ${num2} = ${num1+num2}<br>
    ${num1} - ${num2} = ${num1-num2}<br>
    ${num1} x ${num2} = ${num1*num2}<br>
    ${num1} ÷ ${num2} = ${(num1/num2).toFixed(2)}`
}