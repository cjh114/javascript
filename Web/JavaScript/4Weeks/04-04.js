const ask_buttons = document.querySelectorAll('button')
const asking = ['좋아하는 음식은', '좋아하는 계절은', '좋아하는 색깔은', '좋아하는 동물은']
const box = document.querySelector('.box')
let answers = ['', '', '', '']
let result = ''

ask_buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        answers[index] = `${asking[index]} ${prompt(`${asking[index]}?`)}`

        if (answers.filter(element => '' === element).length == 0) {
            answers.forEach((answer) => {
                result += `${answer} <br>`
            })
            box.innerHTML = result
        }
    })
})

