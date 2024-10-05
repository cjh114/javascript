const textbars = document.querySelectorAll('.english')
const englishes = ['Student', 'Rainbow', 'Car', 'Bird']
const change = document.querySelector('.change')
const reset = document.querySelector('.reset')

change.addEventListener('click', () => {
    textbars.forEach((textbar, index) => {
        textbar.textContent = englishes[index]
    })
})

reset.addEventListener('click', () => {
    textbars.forEach((textbar) =>{
        textbar.textContent = ''
    })
})