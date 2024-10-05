// const button_1 = document.querySelector('.button_1')
// const button_2 = document.querySelector('.button_2')
// const button_3 = document.querySelector('.button_3')
// const button_4 = document.querySelector('.button_4')

// const button_5 = document.querySelector('.button_5')

// const button_1_text = document.querySelector('.button_1_text')
// const button_2_text = document.querySelector('.button_2_text')
// const button_3_text = document.querySelector('.button_3_text')
// const button_4_text = document.querySelector('.button_4_text')

// button_1.addEventListener('click', () => {
//     button_1_text.innerText = '대한민국'
// })

// button_2.addEventListener('click', () => {
//     button_2_text.innerText = '서울'
// })

// button_3.addEventListener('click', () => {
//     button_3_text.innerText = '약 5,000만명'
// })

// button_4.addEventListener('click', () => {
//     button_4_text.innerText = '+82'
// })

// button_5.addEventListener('click', () => {
//     button_1_text.innerText = ''
//     button_2_text.innerText = ''
//     button_3_text.innerText = ''
//     button_4_text.innerText = ''
// })

const buttons = document.querySelectorAll('button')
const infos = document.querySelectorAll('div')       //innertext
const data = ['대한민국', '서울', '약 5,000만명', '+82']

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
    if (index==4) {                              //reset button
        infos.forEach((info) => {
            info.textContent = ''
        })
    }
    else{
        infos[index].textContent = data[index]
    }})
})