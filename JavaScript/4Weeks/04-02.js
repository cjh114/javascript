const button_1 = document.querySelector('.button_1')
const button_2 = document.querySelector('.button_2')
const button_3 = document.querySelector('.button_3')
const button_4 = document.querySelector('.button_4')

const button_1_text = document.querySelector('.button_1_text')
const button_2_text = document.querySelector('.button_2_text')
const button_3_text = document.querySelector('.button_3_text')
const button_4_text = document.querySelector('.button_4_text')

button_1.addEventListener('click', () => {
    button_1_text.innerText = '대한민국'
})

button_2.addEventListener('click', () => {
    button_2_text.innerText = '서울'
})

button_3.addEventListener('click', () => {
    button_3_text.innerText = '약 5,000만명'
})

button_4.addEventListener('click', () => {
    button_4_text.innerText = '+82'
})
